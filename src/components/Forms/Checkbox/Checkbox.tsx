/* External dependencies */
import React, { Ref, forwardRef, useMemo } from 'react'
import { values, isBoolean, isEmpty, includes, noop } from 'lodash-es'

/* Internal dependencies */
import { IconSize, IconProps } from 'Components/Icon'
import { Wrapper, Checker, Icon, Content } from './Checkbox.styled'
import CheckType from './CheckType'
import type CheckboxProps from './Checkbox.types'

export const CHECKBOX_TEST_ID = 'bezier-react-checkbox'
export const CHECKBOX_CHECKER_TEST_ID = 'bezier-react-checkbox-checker'

const checkTypeValues = values(CheckType)

const checkIconCommonProps: Pick<IconProps, 'size' | 'color'> = {
  size: IconSize.XS,
  color: 'bgtxt-absolute-white-dark',
}

function Checkbox(
  {
    as,
    testId = CHECKBOX_TEST_ID,
    checkerTestId = CHECKBOX_CHECKER_TEST_ID,
    className,
    contentClassName,
    disabled = false,
    checked = false,
    children,
    onClick = noop,
  }: CheckboxProps,
  forwardedRef: Ref<any>,
) {
  const checkStatus = useMemo(() => {
    if (isBoolean(checked)) { return (checked) ? CheckType.True : CheckType.False }
    if (includes(checkTypeValues, checked)) { return checked }
    return CheckType.False
  }, [checked])

  const CheckIcon = useMemo(() => {
    switch (checkStatus) {
      case CheckType.True:
        return (
          <Icon
            name="check-bold"
            {...checkIconCommonProps}
          />
        )
      case CheckType.Partial:
        return (
          <Icon
            name="hyphen-bold"
            {...checkIconCommonProps}

          />
        )
      default:
        return null
    }
  }, [checkStatus])

  return (
    <Wrapper
      ref={forwardedRef}
      as={as}
      className={className}
      disabled={disabled}
      onClick={disabled ? noop : onClick}
      data-testid={testId}
    >
      <Checker
        disabled={disabled}
        checkStatus={checkStatus}
        data-testid={checkerTestId}
      >
        { CheckIcon }
      </Checker>
      { !isEmpty(children) ? (
        <Content className={contentClassName}>
          { children }
        </Content>
      ) : null }
    </Wrapper>
  )
}

export default forwardRef(Checkbox)
