/* External dependencies */
import React, { forwardRef, useMemo } from 'react'
import { isEmpty } from 'lodash-es'

/* Internal dependencies */
import { Typography } from 'Foundation'
import useFormControlContext from 'Components/Forms/useFormControlContext'
import { FormLabelHelp } from 'Components/Forms/FormLabelHelp'
import type FormLabelProps from './FormLabel.types'
import * as Styled from './FormLabel.styled'

export const FORM_LABEL_TEST_ID = 'bezier-react-form-label'

function FormLabel({
  testId = FORM_LABEL_TEST_ID,
  help,
  HelpTooltip,
  as = 'label',
  bold = true,
  color = 'txt-black-darkest',
  children,
  ...rest
}: FormLabelProps,
forwardedRef: React.Ref<HTMLLabelElement>,
) {
  const contextValue = useFormControlContext()

  const { Wrapper, typo, ...ownProps } = contextValue?.getLabelProps(rest) ?? {
    Wrapper: React.Fragment,
    typo: Typography.Size13,
    ...rest,
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

  const HelpComponent = useMemo(() => {
    if (HelpTooltip) {
      return HelpTooltip
    }

    if (isEmpty(help)) { return null }

    return (
      <FormLabelHelp>
        { help }
      </FormLabelHelp>
    )
  }, [
    HelpTooltip,
    help,
  ])

  if (isEmpty(children)) { return null }

  return (
    <Wrapper>
      { !HelpComponent
        ? LabelComponent
        : (
          <Styled.Box>
            { LabelComponent }
            { HelpComponent }
          </Styled.Box>
        ) }
    </Wrapper>
  )
}

export default forwardRef(FormLabel)
