import { execFileSync } from 'node:child_process'
import { createHash } from 'node:crypto'

const REPOSITORY = 'https://github.com/channel-io/core-bezier-system'
const NO_SPEC_FAMILIES = new Set([
  'Box',
  'HStack',
  'VStack',
  'Text',
  'Icon',
  'SmoothCornersBox',
])

function sha256(value) {
  return createHash('sha256').update(value).digest('hex')
}

function selectionSection(markdown) {
  const section =
    /^## 2\. Selection Rules[^\n]*\n[\s\S]*?(?=^## |$(?![\s\S]))/mu.exec(
      markdown
    )?.[0]
  if (!section) throw new Error('Missing selection criteria section (§2).')
  return `${section.trimEnd()}\n`
}

/** Only the explicit Use when / Do not use when subsections are authoritative. */
export function parseSelectionRules(section) {
  const result = { when: [], avoid: [] }
  let mode = null
  let fence = false
  let current = null
  let field = null

  function finish() {
    if (!current) return
    if (!current.condition) throw new Error('Empty selection condition.')
    if (current.useInstead) {
      const [alternative, ...reason] = current.useInstead.split(/\s+[—–]\s+/u)
      current.useInstead = alternative
      if (reason.length) {
        current.because = [reason.join(' — '), current.because]
          .filter(Boolean)
          .join(' ')
      }
    }
    result[mode].push(current)
    current = null
    field = null
  }

  for (const raw of section.split('\n')) {
    const line = raw.trim()
    if (/^#{1,6} /u.test(line) && !fence) {
      finish()
      mode = /^### 사용 기준 \(Use when\)/u.test(line)
        ? 'when'
        : /^### 사용 금지 기준 \(Do not use when\)/u.test(line)
          ? 'avoid'
          : null
      continue
    }
    if (line.startsWith('```')) {
      if (fence) finish()
      fence = !fence
      continue
    }
    if (!mode || !fence || !line) continue
    const condition = /^(?:\[(Web|Mobile)\]\s+)?(?:IF|When)(?:\s+(.*)|$)/u.exec(
      line
    )
    if (condition) {
      finish()
      const markers = [...line.matchAll(/\[(Web|Mobile)\]/gu)].map((match) =>
        match[1].toLowerCase()
      )
      if (new Set(markers).size > 1)
        throw new Error('Conflicting selection platform markers.')
      current = {
        condition: (condition[2] ?? '')
          .replace(/\s*\[(Web|Mobile)\]/gu, '')
          .trim(),
        because: null,
        useInstead: null,
        platform: markers[0] ?? null,
      }
      field = 'condition'
      continue
    }
    const detail = /^(BECAUSE|USE INSTEAD)\s+(.+)$/u.exec(line)
    if (detail && current) {
      field = detail[1] === 'BECAUSE' ? 'because' : 'useInstead'
      if (current[field]) throw new Error(`Duplicate selection field: ${field}`)
      current[field] = detail[2]
      continue
    }
    const guidance = /^(USE|DO NOT USE)\s+(.+)$/u.exec(line)
    if (guidance && current) {
      field = 'guidance'
      current.guidance = [current.guidance, `${guidance[1]} ${guidance[2]}`]
        .filter(Boolean)
        .join(' ')
      continue
    }
    // Continuations are indented; unknown unindented keywords must not silently disappear.
    if (!current || !/^\s/u.test(raw)) {
      throw new Error(`Unsupported selection syntax: ${line}`)
    }
    current[field] = [current[field], line].filter(Boolean).join(' ')
  }
  if (fence) throw new Error('Unclosed selection criteria code fence.')
  finish()
  if (!result.when.length || !result.avoid.length) {
    throw new Error(
      'Selection criteria require nonempty Use when and Do not use when sections.'
    )
  }
  return result
}

export function createUsageSnapshot(specRepo, commit) {
  if (!/^[a-f0-9]{40}$/u.test(commit))
    throw new Error('A full git commit SHA is required.')
  const git = (...args) =>
    execFileSync('git', args, {
      cwd: specRepo,
      encoding: 'utf8',
      maxBuffer: 10 * 1024 * 1024,
    })
  const paths = git(
    'ls-tree',
    '-r',
    '--name-only',
    commit,
    '--',
    'docs/components'
  )
    .trim()
    .split('\n')
    .filter((path) => /^docs\/components\/[^/]+-spec\.md$/u.test(path))
    .sort()
  if (!paths.length) throw new Error('No component specs at the pinned commit.')
  const specs = {}
  const excluded = []
  for (const path of paths) {
    const family = path.split('/').at(-1).replace('-spec.md', '')
    const markdown = git('show', `${commit}:${path}`)
    if (/^>.*DEPRECATED/mu.test(markdown.slice(0, 2000))) {
      excluded.push(family)
      continue
    }
    const section = selectionSection(markdown)
    try {
      parseSelectionRules(section)
    } catch (error) {
      throw new Error(`${path}: ${error.message}`, { cause: error })
    }
    specs[family] = { path, sha256: sha256(section), section }
  }
  return {
    schemaVersion: '1.0.0',
    source: { repository: REPOSITORY, commit },
    specs,
    excluded,
  }
}

export function usageForFamily(snapshot, family) {
  if (
    snapshot.schemaVersion !== '1.0.0' ||
    snapshot.source?.repository !== REPOSITORY ||
    !/^[a-f0-9]{40}$/u.test(snapshot.source?.commit ?? '')
  )
    throw new Error('Invalid usage snapshot provenance.')
  if (snapshot.excluded.includes(family))
    throw new Error(`Deprecated/excluded spec: ${family}`)
  const spec = snapshot.specs[family]
  if (!spec) {
    if (NO_SPEC_FAMILIES.has(family)) return null
    throw new Error(
      `Missing component spec for ${family}. Sync the pinned usage snapshot.`
    )
  }
  if (
    spec.path !== `docs/components/${family}-spec.md` ||
    sha256(spec.section) !== spec.sha256
  ) {
    throw new Error(`Invalid usage snapshot path or sha256 hash: ${family}`)
  }
  return {
    ...parseSelectionRules(spec.section),
    source: { ...snapshot.source, path: spec.path, sha256: spec.sha256 },
  }
}
