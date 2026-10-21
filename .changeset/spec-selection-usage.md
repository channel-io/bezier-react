---
"@channel.io/bezier-react": patch
"@channel.io/bezier-toolkit": patch
"@channel.io/stylelint-bezier": patch
---

core-bezier-system의 커밋 고정 spec에서 컴포넌트 사용 기준을 생성합니다. React manifest v2는 조건·이유·대안·플랫폼과 출처를 제공하고 Toolkit은 기존 v1도 계속 읽습니다. story의 수동 usage는 더 이상 허용하지 않습니다.

Stylelint의 컴포넌트 계약 로더도 React manifest v1/v2를 모두 읽도록 갱신합니다.
