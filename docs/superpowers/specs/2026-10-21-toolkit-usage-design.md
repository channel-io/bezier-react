# Bezier 사용 기준과 우회 검사 개선

## 목적

컴포넌트 선택에 필요한 사용 조건, 이유, 대안과 플랫폼을 설치 manifest에서 조회한다. 커스텀 native 컨트롤과 레거시 컴포넌트를 감싼 패키지 때문에 검사를 통과하는 경우를 줄인다.

## 결정

- 사용 기준의 원본은 core-bezier-system의 활성 컴포넌트 spec §2이다. story는 compound 구조만 소유한다.
- React manifest는 schemaVersion 2.0.0으로 올린다. usage.when/avoid는 `{ condition, because, useInstead, platform }` 객체 배열이다. because/useInstead/platform은 원문에 없으면 null이며 platform은 web/mobile이다. 대안은 원문 문자열로 보존한다. 문서의 대안은 설치된 public API를 보장하지 않는다. USE/DO NOT USE 명령이 따로 있으면 선택적 guidance 필드로 보존한다.
- usage.source에 repository, commit, path, sha256을 기록한다. 스펙의 multiline 내용을 보존하며 규칙 밖 예시를 규칙으로 섞지 않는다.
- spec 커밋을 고정한 checked-in snapshot을 동기화 명령으로 만든다. 명령은 git show <commit>:<path>로 커밋 내용을 읽는다. 일반 manifest 빌드는 네트워크와 형제 저장소 없이 동작한다. 추출 불가한 활성 spec은 실패하고, spec 없는 레이아웃 기본 요소는 usage=null을 허용한다.
- Toolkit은 React manifest v1/v2를 읽고 icon/token은 v1을 유지한다. ESLint와 Stylelint 계약 로더도 React v2를 허용한다. 기존 v1 사용자는 계속 동작하고, 구버전 도구는 v2를 조용히 오독하지 않는다.
- Select의 When을 IF로 통일한다. TextInputAffix는 TextInput으로 통합된 archive이므로 추출하지 않는다. DropdownMenu 정렬 예시는 Select의 값 유지 기준과 맞춘다. 디자인 값/API는 바꾸지 않는다.
- native 검사는 styled-components의 실제 import binding을 기준으로 styled.button, styled('button'), attrs 및 로컬 alias를 다룬다. beta Button을 감싼 styled(Button)은 허용한다.
- legacy 검사는 외부 패키지 import에서 실제로 사용한 export가 렌더하는 컴포넌트 의존성을 추적한다. 같은 패키지의 관계없는 export는 경고하지 않는다. 파일과 export의 cycle을 끊고, dynamic/해석 불가 코드는 안전하다고 단정하지 않는다. workspace src와 source로 제공된 패키지를 지원하고 구체적인 한계는 README에 적는다.
- guardrail 래퍼와 versioned skill의 description에 ‘Bezier 컴포넌트로 Desk UI를 구현하거나 리뷰할 때’를 넣고 사용 기준 조회를 구현 흐름에 연결한다. 호출률 개선은 별도의 생성 실험에서 확인한다.

## 검증

실제 DropdownMenu spec의 Select 대안, Select의 Web/Mobile 분리, multiline, 문서 형식 오류, snapshot 고정성/해시, coverage를 node tests로 확인한다. Toolkit v1/v2 조회와 malformed usage 거부를 검증한다. lint는 styled native 및 TableBodyCheckboxCell과 동등한 패키지 래퍼, barrel, alias, cycle, 관계없는 export, beta-only wrapper를 검증한다. 기존 패키지 tests/typecheck/lint/build를 실행한다.

## 배포

core-bezier-system과 bezier-react에 한국어 Draft PR을 만든다. spec 변경 commit을 snapshot에 고정한다. 패키지 publish, Desk 의존성 갱신, merge는 하지 않는다. Desk 설치본에서 새 동작을 사용하려면 두 PR 검토 및 패키지 배포가 필요하다.
