/* External dependencies */
import React, {
  forwardRef,
  ReactElement,
  useCallback,
  MouseEvent,
} from 'react'

/* Internal dependencies */
import useFormControlContext from 'Components/Forms/useFormControlContext'
import SwitchProps from './Switch.types'
import * as Styled from './Switch.styled'

// TODO: 테스트 코드 작성 필요
function Switch(
  {
    testId,
    checked = false,
    size = 16,
    onClick,
    ...rest
  }: SwitchProps,
  forwardedRef: React.Ref<any>,
): ReactElement {
  const contextValue = useFormControlContext()

  const {
    disabled = false,
    Wrapper,
    ...ownProps
  } = contextValue?.getFieldProps(rest) ?? {
    ...rest,
    Wrapper: React.Fragment,
  }

  const handleClick = useCallback((event: MouseEvent) => {
    if (!disabled && onClick) {
      onClick(!checked, event)
    }
  }, [
    onClick,
    checked,
    disabled,
  ])

  return (
    <Wrapper>
      <Styled.Wrapper
        {...ownProps}
        ref={forwardedRef}
        size={size}
        checked={checked}
        disabled={disabled}
        onClick={handleClick}
        data-testid={testId}
      >
        <Styled.Content
          size={size}
          checked={checked}
        />
      </Styled.Wrapper>
    </Wrapper>
  )
}

export default forwardRef(Switch)
