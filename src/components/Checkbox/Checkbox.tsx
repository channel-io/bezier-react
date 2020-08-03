/* External dependencies */
import React, {
  Ref,
  forwardRef,
  useMemo,
} from 'react'
import _ from 'lodash'

/* Internal dependencies */
import CheckboxProps, { CheckType } from './Checkbox.types'
import { Wrapper, Checker, Content } from './Checkbox.styled'

export const CHECKBOX_TEST_ID = 'ch-design-system-checkbox'
export const CHECKBOX_CHECKER_TEST_ID = 'ch-design-system-checkbox-checker'

const checkTypeValues = _.values(CheckType)

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
    onClick,
  }: CheckboxProps,
  forwardedRef: Ref<any>,
) {
  const checkStatus = useMemo(() => {
    if (_.isBoolean(checked)) { return (checked) ? CheckType.True : CheckType.False }
    if (_.includes(checkTypeValues, checked)) { return checked }
    return CheckType.False
  }, [
    checked,
  ])

  return (
    <Wrapper
      ref={forwardedRef}
      as={as}
      className={className}
      disabled={disabled}
      onClick={disabled ? _.noop : onClick}
      data-testid={testId}
    >
      <Checker
        disabled={disabled}
        checkStatus={checkStatus}
        data-testid={checkerTestId}
      />

      { !_.isEmpty(children) ? (
        <Content className={contentClassName}>
          { children }
        </Content>
      ) : null }
    </Wrapper>
  )
}

export default forwardRef(Checkbox)
