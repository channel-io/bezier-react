/* External dependencies */
import React, { forwardRef, useMemo } from 'react'
import { isEmpty } from 'lodash-es'

/* Internal dependencies */
import { Typography } from 'Foundation'
import { IconSize } from 'Components/Icon'
import useFormControlContext from 'Components/Forms/useFormControlContext'
import type FormLabelProps from './FormLabel.types'
import * as Styled from './FormLabel.styled'

export const FORM_LABEL_TEST_ID = 'bezier-react-form-label'
export const FORM_LABEL_HELP_TEST_ID = 'bezier-react-form-label-help'

function FormLabel({
  testId = FORM_LABEL_TEST_ID,
  help,
  as = 'label',
  bold = true,
  typo = Typography.Size13,
  color = 'txt-black-darkest',
  children,
  ...rest
}: FormLabelProps,
forwardedRef: React.Ref<HTMLLabelElement>,
) {
  const contextValue = useFormControlContext()

  const { Wrapper, ...ownProps } = contextValue?.getLabelProps(rest) ?? {
    ...rest,
    Wrapper: React.Fragment,
  }

  const LabelComponent = useMemo(() => (
    <Styled.Label
      {...ownProps}
      ref={forwardedRef}
      testId={testId}
      forwardedAs={as}
      bold={bold}
      typo={typo}
      color={color}
    >
      { children }
    </Styled.Label>
  ), [
    as,
    typo,
    bold,
    color,
    testId,
    children,
    forwardedRef,
    ownProps,
  ])

  if (isEmpty(children)) { return null }

  return (
    <Wrapper>
      { isEmpty(help)
        ? LabelComponent
        : (
          <Styled.Box>
            { LabelComponent }
            <Styled.Tooltip content={help}>
              <Styled.HelpIcon
                testId={FORM_LABEL_HELP_TEST_ID}
                name="help-filled"
                size={IconSize.XS}
                color="txt-black-dark"
              />
            </Styled.Tooltip>
          </Styled.Box>
        ) }
    </Wrapper>
  )
}

export default forwardRef(FormLabel)
