# 사용 기준 snapshot

컴포넌트의 사용 기준은 core-bezier-system의 활성 spec §2에서 생성합니다. story metadata는 compound 구조만 정의합니다. React manifest v2의 usage는 조건, 이유, 대안과 플랫폼을 제공하며 `source`로 spec의 커밋·경로·section SHA-256을 추적합니다.

## 동기화

```sh
pnpm manifest:sync-usage /absolute/path/to/core-bezier-system <40-character-commit-SHA>
pnpm manifest:generate
pnpm manifest:check
```

동기화는 작업 트리 대신 지정 커밋의 `git show` 결과를 읽습니다. `usage.snapshot.json`을 커밋하므로 일반 빌드는 네트워크나 형제 저장소에 의존하지 않습니다. spec 변경을 반영할 때 이 명령으로 snapshot을 갱신하고 diff를 검토합니다. 최신 upstream을 빌드 중 자동 조회하지 않습니다.

직접 `docs/components/*-spec.md`의 활성 문서를 읽습니다. `_candidates`와 `DEPRECATED` 문서는 제외합니다. `TextInputAffix`는 `TextInput`으로 통합되었으므로 별도 기준을 만들지 않습니다. spec이 없는 Box/HStack/VStack/Text/Icon/SmoothCornersBox는 null을 허용하고, 다른 public family에 spec이 없거나 활성 spec의 형식이 깨지면 빌드를 실패시킵니다.

`사용 기준 (Use when)`과 `사용 금지 기준 (Do not use when)`의 fenced 규칙만 파싱합니다. IF/When, BECAUSE, USE INSTEAD, USE/DO NOT USE와 여러 줄 설명을 보존합니다. 다른 절의 예시·치수 가이드는 family 선택 기준에 섞지 않습니다. 플랫폼 표기가 없으면 null이고 서로 충돌하면 실패합니다. 문서의 대안은 설치된 public API라는 보장이 없으므로 사용 전에 lookup으로 검증해야 합니다.
