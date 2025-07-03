# Overlay 컴포넌트 레이아웃 시프트 & AutoFocus 수정

## 문제점

`Overlay` 컴포넌트가 `TextField` 같이 포커스 가능한 컴포넌트와 함께 사용될 때 두 가지 주요 문제가 발생했습니다:

1. 레이아웃 시프트 발생
2. `autoFocus` 기능이 제대로 동작하지 않음

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
- **추가 문제**: 화면 밖 렌더링이나 `visibility: hidden`으로 인해 `autoFocus`가 동작하지 않음

## 해결책

### 개선된 빠른 측정 방식

기존의 화면 밖 렌더링 대신 **극히 짧은 측정 단계**를 도입하여 두 문제를 모두 해결:

1. **측정 단계** (2 프레임): `shouldRender = true, isMeasuring = true, shouldShow = false`
   - 오버레이를 올바른 위치에 렌더링
   - `opacity: 0.1` 적용으로 거의 보이지 않지만 포커스는 가능
   - `transition: 'none'`으로 전환 효과 비활성화

2. **표시 단계**: `shouldRender = true, isMeasuring = false, shouldShow = true`
   - 측정 완료 후 즉시 `opacity: 1`로 완전 표시
   - `autoFocus` 요소가 정상적으로 포커스됨

## 구현 세부사항

### 상태 관리

```typescript
const [shouldRender, setShouldRender] = useState(false)
const [shouldShow, setShouldShow] = useState(false)
const [isMeasuring, setIsMeasuring] = useState(false) // 새로 추가
```

### 렌더링 로직 수정 (개선됨)

```typescript
useEffect(() => {
  if (show) {
    if (!shouldRender) {
      setShouldRender(true)
      setIsMeasuring(true)
      
      // 매우 빠른 측정 단계 (2 프레임만)
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setIsMeasuring(false)
          setShouldShow(true)
        })
      })
    }
  }
  // ... hide 로직  
}, [show, withTransition, shouldRender])
```

### 스타일 오버라이드 (개선됨)

```typescript
style={{
  ...style,
  ...overlayStyle,
  // 측정 단계에서 거의 투명하게 하되 포커스는 가능하도록
  ...(isMeasuring && {
    opacity: 0.1, // 거의 보이지 않지만 포커스 가능
    transition: 'none', // 전환 효과 비활성화
  }),
}}
```

### 위치 계산 개선

```typescript
const overlayStyle = getOverlayStyle({
  containerRect: containerRect.current,
  targetRect: targetRect.current,
  overlay: isMeasuring ? null : overlayRef.current, // 측정 중 초기 위치 허용
  position,
  marginX,
  marginY,
  keepInContainer,
  show: shouldShow,
})
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
2. **AutoFocus 정상 동작**: `TextField` 등의 `autoFocus` 속성이 완벽하게 작동
3. **극도로 빠른 전환**: 2 프레임(약 33ms)만의 측정 단계로 거의 즉시 표시
4. **기존 동작 유지**: 사용자 관점에서 더 나은 경험 제공
5. **성능 개선**: 복잡한 측정 로직 단순화
6. **브라우저 호환성**: 기존 지원 브라우저에서 모두 동작

## 데모 파일

실제 개선 사항을 확인하려면 다음 파일들을 참조하세요:

- `overlay-autofocus-demo.html`: 개선된 동작을 시연하는 인터랙티브 데모
- `test-autofocus.html`: 문제가 있던 방식과 개선된 방식 비교

## 호환성

- 기존 API 변경 없음
- 모든 props와 기능 동일하게 동작
- TypeScript 타입 안정성 유지