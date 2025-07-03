# Overlay 컴포넌트 레이아웃 시프트 수정

## 문제점

`Overlay` 컴포넌트가 `TextField` 같이 포커스 가능한 컴포넌트와 함께 사용될 때 레이아웃이 시프트되는 버그가 발생했습니다.

### 원인 분석

1. **2단계 렌더링 방식**: 오버레이를 띄울 때 2단계에 걸쳐서 보여주면서 transform 속성이 짧은 순간에 바뀌는 것이 원인
2. **첫 번째 단계**: `shouldRender = true, shouldShow = false`
   - `overlayRef`가 아직 null인 상태에서 `getOverlayStyle` 호출
   - 결과로 `transform: translateX(0px) translateY(0px)` 반환
   - opacity: 0인 상태로 target 바로 위에 오버레이가 DOM에 마운트
3. **두 번째 단계**: `shouldRender = true, shouldShow = true`
   - `overlayRef`가 엘리먼트를 참조한 상태에서 적절한 translate 값 계산
   - 오버레이 위치가 바뀌면서 사용자에게 보임

### 문제 상황

- `autoFocus` 속성이 있는 요소가 첫 번째 단계에서 포커스되면서 스크롤이 움직임
- 컨테이너 경계에 가까이 위치한 오버레이에서 간헐적으로 레이아웃 시프트 발생

## 해결책

### 개선된 3단계 렌더링 방식

1. **측정 단계**: `shouldRender = true, isMeasuring = true, shouldShow = false`
   - 오버레이를 화면 밖(`top: -9999px, left: -9999px`)에 렌더링
   - `visibility: 'hidden'`, `position: 'fixed'` 적용
   - DOM에 마운트되어 크기 측정 가능하지만 화면에 보이지 않음

2. **측정 완료 감지**: `useIsomorphicLayoutEffect`로 `overlayRef.current` 존재 확인

3. **표시 단계**: `shouldRender = true, isMeasuring = false, shouldShow = true`
   - 측정된 크기를 바탕으로 올바른 위치 계산
   - 정확한 위치에 오버레이 표시

## 구현 세부사항

### 상태 관리

```typescript
const [shouldRender, setShouldRender] = useState(false)
const [shouldShow, setShouldShow] = useState(false)
const [isMeasuring, setIsMeasuring] = useState(false) // 새로 추가
```

### 렌더링 로직 수정

```typescript
useEffect(() => {
  if (show) {
    if (!shouldRender) {
      window.requestAnimationFrame(() => {
        setShouldRender(true)
        setIsMeasuring(true)
      })
    }
  }
  // ... hide 로직
}, [show, withTransition, shouldRender])

// 측정 완료 감지
useIsomorphicLayoutEffect(() => {
  if (shouldRender && isMeasuring && overlayRef.current) {
    window.requestAnimationFrame(() => {
      setIsMeasuring(false)
      setShouldShow(true)
    })
  }
}, [shouldRender, isMeasuring])
```

### 스타일 오버라이드

```typescript
style={{
  ...style,
  ...overlayStyle,
  // 측정 단계에서 화면 밖에 위치시켜 레이아웃 시프트 방지
  ...(isMeasuring && {
    visibility: 'hidden' as const,
    position: 'fixed' as const,
    top: '-9999px',
    left: '-9999px',
    transform: 'none',
  }),
}}
```

### CSS 클래스 조건부 적용

```typescript
className={classNames(
  styles.Overlay,
  getZIndexClassName(zIndex),
  (!shouldShow || isMeasuring) && styles.hidden, // isMeasuring 조건 추가
  withTransition && styles.transition,
  className
)}
```

## 테스트 추가

### 레이아웃 시프트 방지 테스트
- 측정 단계에서 오버레이가 화면 밖에 렌더링되는지 확인
- 측정에서 표시 단계로의 전환 테스트
- 스타일링과 z-index가 측정 단계에서도 유지되는지 확인

### 스토리북 예제
- `WithAutoFocusTextField` 스토리 추가
- `autoFocus`가 있는 `TextField`를 포함한 테스트 케이스
- 컨테이너 경계 근처에서의 동작 확인

## 이점

1. **레이아웃 시프트 제거**: `autoFocus` 요소가 있어도 스크롤 이동 없음
2. **기존 동작 유지**: 사용자 관점에서 기존과 동일한 동작
3. **성능 개선**: 불필요한 리렌더링 최소화
4. **브라우저 호환성**: 기존 지원 브라우저에서 모두 동작

## 호환성

- 기존 API 변경 없음
- 모든 props와 기능 동일하게 동작
- TypeScript 타입 안정성 유지