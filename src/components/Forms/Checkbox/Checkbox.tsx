/* External dependencies */
import React, { Ref, forwardRef, useMemo } from 'react'
import { values, isBoolean, isEmpty, includes, noop } from 'lodash-es'

/* Internal dependencies */
import { IconSize, IconProps } from 'Components/Icon'
import useFormFieldProps from 'Components/Forms/useFormFieldProps'
import type CheckboxProps from './Checkbox.types'
import CheckType from './CheckType'
import * as Styled from './Checkbox.styled'

export const CHECKBOX_TEST_ID = 'bezier-react-checkbox'
export const CHECKBOX_CHECKER_TEST_ID = 'bezier-react-checkbox-checker'

const checkTypeValues = values(CheckType)

const checkIconCommonProps: Pick<IconProps, 'size' | 'color'> = {
  size: IconSize.XS,
  color: 'bgtxt-absolute-white-dark',
}

function Checkbox(
  {
    testId = CHECKBOX_TEST_ID,
    checkerTestId = CHECKBOX_CHECKER_TEST_ID,
    contentClassName,
    checked = false,
    children,
    onClick = noop,
    ...rest
  }: CheckboxProps,
  forwardedRef: Ref<any>,
) {
  const {
    disabled,
    ...ownProps
  } = useFormFieldProps(rest)

  const checkStatus = useMemo(() => {
    if (isBoolean(checked)) { return (checked) ? CheckType.True : CheckType.False }
    if (includes(checkTypeValues, checked)) { return checked }
    return CheckType.False
  }, [checked])

  const CheckIcon = useMemo(() => {
    switch (checkStatus) {
      case CheckType.True:
        return (
          <Styled.Icon
            name="check-bold"
            {...checkIconCommonProps}
          />
        )
      case CheckType.Partial:
        return (
          <Styled.Icon
            name="hyphen-bold"
            {...checkIconCommonProps}

          />
        )
      default:
        return null
    }
  }, [checkStatus])

  return (
    <Styled.Wrapper
      ref={forwardedRef}
      disabled={disabled}
      onClick={disabled ? noop : onClick}
      data-testid={testId}
      {...ownProps}
    >
      <Styled.Checker
        disabled={disabled}
        checkStatus={checkStatus}
        data-testid={checkerTestId}
      >
        { CheckIcon }
      </Styled.Checker>
      { !isEmpty(children) ? (
        <Styled.Content className={contentClassName}>
          { children }
        </Styled.Content>
      ) : null }
    </Styled.Wrapper>
  )
}

export default forwardRef(Checkbox)
