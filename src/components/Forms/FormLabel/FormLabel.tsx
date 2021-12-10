/* External dependencies */
import React, { forwardRef, useMemo } from 'react'
import { isEmpty } from 'lodash-es'

/* Internal dependencies */
import { Typography } from 'Foundation'
import { IconSize } from 'Components/Icon'
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
  marginBottom,
  style,
  children,
  ...rest
}: FormLabelProps,
forwardedRef: React.Ref<HTMLLabelElement>,
) {
  const LabelComponent = useMemo(() => (
    <Styled.Label
      {...rest}
      ref={forwardedRef}
      testId={testId}
      forwardedAs={as}
      bold={bold}
      typo={typo}
    >
      { children }
    </Styled.Label>
  ), [
    rest,
    as,
    typo,
    bold,
    testId,
    children,
    forwardedRef,
  ])

  if (isEmpty(children)) { return null }

  return isEmpty(help)
    ? (
      <>
        { LabelComponent }
      </>
    )
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
    )
}

export default forwardRef(FormLabel)
