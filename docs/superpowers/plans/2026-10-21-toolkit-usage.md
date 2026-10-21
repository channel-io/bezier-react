# Bezier Toolkit 사용 기준 개선 Implementation Plan

> **For agentic workers:** Use superpowers:subagent-driven-development or superpowers:executing-plans. Each task follows RED → GREEN verification.

**Goal:** spec의 사용 기준을 manifest로 제공하고 native/legacy 우회 검사의 두 빈틈을 보강한다.
**Architecture:** 고정 spec snapshot을 오프라인 manifest build에 주입한다. React schema v2는 Toolkit/ESLint/Stylelint가 v1과 함께 읽는다. spec/skill 및 lint는 독립 변경 단위다.
**Tech Stack:** Node ESM, TypeScript, ESLint, Jest, pnpm.
**Spec:** ../specs/2026-10-21-toolkit-usage-design.md

## Global Constraints

- 기존 Desk 미커밋 변경 보존. 각 저장소의 별도 worktree에서 작업한다.
- core-bezier-system은 개인 fork에 push한다. PR은 한국어 Draft. merge/publish하지 않는다.
- source snapshot은 커밋 고정, build 중 네트워크 접근 없음.

## Review Focus

- 폐기 spec, 없는 spec, 깨진 활성 spec을 서로 구별해야 한다.
- 한 플랫폼의 조건이 다른 플랫폼으로 섞이면 안 된다.
- 문서 대안을 설치된 public API라고 보장하면 안 된다.
- wrapper 패키지의 관계없는 export는 경고하지 않아야 한다.
- cycle/미지원 wrapper를 안전한 코드로 단정하면 안 된다.

### Task 1: spec와 guardrail 설명 정리

**Files:** core-bezier-system docs/components/{Select,DropdownMenu}-spec.md; packages/bezier-guardrail/skill/\*/SKILL.md; test/contracts.test.mjs; .changeset.
**Interfaces:** 정규화된 spec commit이 Task 2 snapshot의 입력이다.

- [x] 테스트로 description의 구현/리뷰 trigger를 확인한다. 변경 전 실패 확인.
- [x] Select IF 정규화와 DropdownMenu 정렬 예시 정합성 수정. 문서 버전/이력 기록. Affix archive 유지.
- [x] wrapper와 versioned description 수정, 구현 절차에 lookup 사용 기준 확인 추가.
- [x] core pnpm validate, diff 검사 후 commit.

### Task 2: usage snapshot, manifest, Toolkit 호환성

**Files:** scripts/manifests/{usage.mjs,usage.test.mjs,sync-usage.mjs,usage.snapshot.json,generate.mjs,generate.test.mjs,schemas/react.schema.json}; packages/bezier-toolkit/src/{types,manifests}.ts와 tests; storybook metadata; Tabs story; ESLint/Stylelint manifest loaders.
**Interfaces:** usage is `{ when: Rule[], avoid: Rule[], source: { repository, commit, path, sha256 } }`. Rule is `{ condition: string, because: string|null, useInstead: string|null, guidance?: string, platform: 'web'|'mobile'|null }`.

- [x] 실제/fixture spec의 multiline, 이유/대안/플랫폼, 폐기/미지원 형식 실패 테스트부터 작성하고 실패 확인.
- [x] 고정 git show snapshot 동기화와 parser 구현. story usage 제거 후 manifest에 주입. React v2 schema 검증.
- [x] Toolkit v1/v2 호환 및 v3 거부, icon/token v2 거부, malformed v2 usage 거부, CLI 조회 테스트 실패 확인 후 구현.
- [x] core 변경 commit snapshot 동기화. 모든 활성 family의 coverage 확인. node tests, Toolkit tests/typecheck/build, manifest generate/check 검증.

### Task 3: native와 legacy wrapper lint

**Files:** packages/eslint-plugin-bezier/src/rules/{no-native-control-bypass,no-legacy-root-import}.ts; ast.ts 또는 별도 wrapper analyzer; index.test.ts; README.md; .changeset.
**Interfaces:** 현재 rule ID/message code 유지. 신규 경고는 구체적 사용 export와 legacy origin을 보고한다.

- [x] styled native, attrs, alias, beta control, package barrel/function/memo wrappers, unrelated exports, cycles 회귀 테스트 작성 및 실패 확인.
- [x] 최소한의 정적 origin 추적 구현. parser의 기존 제공 계약 사용. 지원 한계 문서화.
- [x] plugin Jest/typecheck/lint/build 확인 후 commit.

### Task 4: 통합 검증과 PR

- [x] 기존 전체 테스트와 변경 패키지 검증. 실제 generated lookup에서 DropdownMenu → Select 안내 확인.
- [x] 독립 리뷰와 중요한 finding 회귀 수정 후 검증.
- [ ] 한국어 changeset/설명으로 Draft PR 생성 및 chat artifact 연결.
