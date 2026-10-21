import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { execFileSync } from 'node:child_process'
import {
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
  mkdirSync,
} from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import test from 'node:test'

import {
  parseSelectionRules,
  usageForFamily,
  createUsageSnapshot,
} from './usage.mjs'

const commit = 'a'.repeat(40)
const section = `## 2. Selection Rules

### 사용 기준 (Use when)

\`\`\`
[Web] IF  폼에서 값을 선택하고
          현재 값을 유지해야 할 때
BECAUSE  값 선택은 액션 실행과 다르다
         여러 줄 이유도 보존한다

[Mobile] IF  시트 안에서 하나를 선택할 때
BECAUSE  선택 상태를 표시한다
\`\`\`

### 사용 금지 기준 (Do not use when)

\`\`\`
IF  폼에서 하나의 값을 선택할 때
USE INSTEAD  Select — 값 유지에 적합하다

IF  여러 값을 선택할 때
USE INSTEAD  MultiSelect
BECAUSE  복수 선택을 지원한다
\`\`\`

### 판단 예시
\`\`\`
IF  예시는 규칙으로 수집하지 않는다
\`\`\`
`
const digest = (text) => createHash('sha256').update(text).digest('hex')
function snapshot(text = section) {
  return {
    schemaVersion: '1.0.0',
    source: {
      repository: 'https://github.com/channel-io/core-bezier-system',
      commit,
    },
    specs: {
      DropdownMenu: {
        path: 'docs/components/DropdownMenu-spec.md',
        sha256: digest(text),
        section: text,
      },
    },
    excluded: ['SectionLabel', 'TextInputAffix'],
  }
}

test('extracts platform, multiline condition, reason, and alternatives without examples', () => {
  const rules = parseSelectionRules(section)
  assert.equal(rules.when.length, 2)
  assert.deepEqual(rules.when[0], {
    condition: '폼에서 값을 선택하고 현재 값을 유지해야 할 때',
    because: '값 선택은 액션 실행과 다르다 여러 줄 이유도 보존한다',
    useInstead: null,
    platform: 'web',
  })
  assert.equal(rules.when[1].platform, 'mobile')
  assert.deepEqual(rules.avoid[0], {
    condition: '폼에서 하나의 값을 선택할 때',
    because: '값 유지에 적합하다',
    useInstead: 'Select',
    platform: null,
  })
  assert.equal(rules.avoid[1].useInstead, 'MultiSelect')
  assert.equal(rules.avoid[1].because, '복수 선택을 지원한다')
})

test('keeps legacy When syntax and condition-suffix platform markers readable', () => {
  const rules = parseSelectionRules(
    section
      .replace('[Web] IF', '[Web] When')
      .replace(
        '[Mobile] IF  시트 안에서 하나를 선택할 때',
        'IF  시트 안에서 하나를 선택할 때 [Mobile]'
      )
  )
  assert.equal(rules.when[0].platform, 'web')
  assert.equal(rules.when[1].platform, 'mobile')
})

test('preserves every explicit Use when heading while skipping size-only headings', () => {
  const extended = section.replace(
    '### 판단 예시',
    '### 사용 기준 (Use when) — size\n\n\`\`\`\nIF  컴팩트한 공간일 때\nBECAUSE  작은 크기가 적합하다\n\`\`\`\n\n### size 선택 기준\n\n\`\`\`\nIF  보조 가이드\nBECAUSE  이 절은 family 선택 기준이 아니다\n\`\`\`\n\n### 판단 예시'
  )
  assert.equal(parseSelectionRules(extended).when.length, 3)
})

test('rejects missing sections, empty conditions, unsupported syntax and unfinished fences', () => {
  for (const invalid of [
    '',
    section.replace('IF  폼에서 하나의 값을 선택할 때', 'IF  '),
    section.replace('[Web] IF', 'WHEN'),
    section.replace('### 사용 금지 기준 (Do not use when)', '### 예시'),
  ]) {
    assert.throws(
      () => parseSelectionRules(invalid),
      /selection|condition|syntax|criteria/i
    )
  }
  assert.throws(
    () =>
      parseSelectionRules(
        section
          .slice(0, section.indexOf('### 판단 예시'))
          .trimEnd()
          .slice(0, -3)
      ),
    /fence/i
  )
})

test('attaches pinned provenance and rejects a modified snapshot fragment', () => {
  const usage = usageForFamily(snapshot(), 'DropdownMenu')
  assert.equal(usage.avoid[0].useInstead, 'Select')
  assert.equal(usage.source.commit, commit)
  assert.equal(usage.source.sha256, digest(section))
  const changed = snapshot()
  changed.specs.DropdownMenu.section += 'changed'
  assert.throws(() => usageForFamily(changed, 'DropdownMenu'), /hash|sha256/i)
})

test('allows only explicit layout primitives to lack a spec and rejects unknown/deprecated families', () => {
  assert.equal(usageForFamily(snapshot(), 'Box'), null)
  assert.throws(
    () => usageForFamily(snapshot(), 'UnknownComponent'),
    /missing.*spec/i
  )
  assert.throws(
    () => usageForFamily(snapshot(), 'TextInputAffix'),
    /deprecated|excluded/i
  )
})

test('reads a fixed git commit rather than uncommitted spec contents', () => {
  const root = mkdtempSync(join(tmpdir(), 'bezier-specs-'))
  const git = (...args) =>
    execFileSync('git', args, { cwd: root, encoding: 'utf8' }).trim()
  try {
    git('init', '-q')
    git('config', 'user.email', 'test@example.com')
    git('config', 'user.name', 'Test')
    mkdirSync(join(root, 'docs/components'), { recursive: true })
    const path = join(root, 'docs/components/DropdownMenu-spec.md')
    writeFileSync(path, '# DropdownMenu\n\n' + section + '\n## 3. Anatomy\n')
    writeFileSync(
      join(root, 'docs/components/TextInputAffix-spec.md'),
      '# TextInputAffix\n> DEPRECATED: 통합\n'
    )
    git('add', '.')
    git('commit', '-qm', 'fixture')
    const fixed = git('rev-parse', 'HEAD')
    writeFileSync(path, 'invalid uncommitted content')
    const captured = createUsageSnapshot(root, fixed)
    assert.equal(captured.source.commit, fixed)
    assert.equal(captured.specs.DropdownMenu.section, section.trimEnd() + '\n')
    assert.ok(captured.excluded.includes('TextInputAffix'))
    assert.equal(
      usageForFamily(captured, 'DropdownMenu').avoid[0].useInstead,
      'Select'
    )
    assert.throws(() => createUsageSnapshot(root, '--help'), /commit/i)
  } finally {
    rmSync(root, { recursive: true, force: true })
  }
})

test('preserves USE and DO NOT USE details without treating them as a reason', () => {
  const rules = parseSelectionRules(
    section
      .replace('BECAUSE  값 선택은', 'USE  Select size="m"\nBECAUSE  값 선택은')
      .replace(
        'USE INSTEAD  Select —',
        'DO NOT USE  DropdownMenu\nUSE INSTEAD  Select —'
      )
  )
  assert.equal(rules.when[0].guidance, 'USE Select size="m"')
  assert.equal(rules.avoid[0].guidance, 'DO NOT USE DropdownMenu')
})
