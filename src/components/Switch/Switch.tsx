/* External dependencies */
import React, {
  forwardRef,
  ReactElement,
  useCallback,
  MouseEvent,
} from 'react'

/* Internal dependencies */
import SwitchProps from './Switch.types'
import { Wrapper, Content } from './Switch.styled'

// TODO: 테스트 코드 작성 필요
function Switch(
  {
    as,
    testId,
    className,
    style,
    checked = false,
    disabled = false,
    size = 16,
    onClick,
  }: SwitchProps,
  forwardedRef: React.Ref<any>,
): ReactElement {
  const handleClick = useCallback((event: MouseEvent) => {
    if (!disabled && onClick) {
      onClick(!checked, event)
    }
  }, [onClick, checked, disabled])

  return (
    <Wrapper
      ref={forwardedRef}
      as={as}
      className={className}
      size={size}
      checked={checked}
      disabled={disabled}
      style={style}
      onClick={handleClick}
      data-testid={testId}
    >
      <Content
        size={size}
        checked={checked}
      />
    </Wrapper>
  )
}

export default forwardRef(Switch)
