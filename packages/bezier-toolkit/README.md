# `@channel.io/bezier-toolkit`

Repo-local CLI and library for reading Bezier manifests from packages installed in a consumer repository.

Install the Toolkit with `@channel.io/bezier-react` and
`@channel.io/bezier-icons`, whose manifests it will inspect. Pin the resolved
versions in the consumer lockfile. You do not need to install
`@channel.io/bezier-tokens` separately: the Toolkit reads the token package that
the installed `@channel.io/bezier-react` depends on.

```sh
yarn add --exact @channel.io/bezier-react@next @channel.io/bezier-icons@next
yarn add --dev --exact @channel.io/bezier-toolkit@next
```

```sh
yarn bezier lookup Tabs
yarn bezier doctor
yarn bezier version
```

Every command emits deterministic JSON. The Toolkit resolves
`@channel.io/bezier-react/manifest.json` and
`@channel.io/bezier-icons/manifest.json` from the consumer working directory.
It then resolves `@channel.io/bezier-tokens/manifest.json` through that resolved
`@channel.io/bezier-react` package, so the catalog uses the same token package as
React even when the dependency is nested or provided by Yarn Plug'n'Play.

The three validated manifests are merged into one in-memory catalog. Its cache
key includes package versions, source commits, schema versions, and resolved
manifest paths. `lookup` searches names, aliases, deprecations, replacements,
and component semantics; `doctor` reports environment, lockfile, manifest,
provenance, and compatibility diagnostics; `version` prints the resolved
Toolkit and Bezier package tuple.

The Toolkit does not read a Bezier source checkout, a bundled catalog, Pilot
fixtures, or a global Homebrew installation. Missing packages and unsupported
manifest schema majors are reported explicitly by `doctor`.

## 컴포넌트 사용 기준

React manifest v2의 `data.semantics.usage`는 `when`/`avoid` 객체 배열과 `source`를 제공합니다. 각 기준은 `condition`, `because`, `useInstead`, `platform`을 가집니다. `platform`은 `web`, `mobile` 또는 문서가 플랫폼을 한정하지 않은 경우 `null`입니다. `guidance`가 있으면 원문의 `USE`/`DO NOT USE` 설명입니다. `because`와 `useInstead`도 원문에 없으면 `null`입니다.

```json
{
  "condition": "폼에서 미리 정의된 옵션 목록 중 하나의 값을 선택해야 할 때",
  "because": "DropdownMenu는 액션 실행 전용, 폼 값 저장에 적합하지 않다",
  "useInstead": "Select",
  "platform": null
}
```

대안은 디자인 문서의 설명이며 설치된 API라는 보장은 아닙니다. 대체 컴포넌트의 import/props는 같은 설치본의 lookup으로 확인합니다. 레이아웃 기본 요소의 `usage: null`은 기준이 제공되지 않았다는 뜻입니다.

Toolkit은 React manifest v1과 v2를 지원합니다. v1의 `when`/`avoid`는 문자열 배열이고 v2는 구조화된 객체 배열이므로 `schemaVersion`을 확인하세요. icon/token manifest는 계속 v1입니다. 구버전 Toolkit은 React v2를 거부하므로 React와 Toolkit을 함께 갱신해야 합니다.
