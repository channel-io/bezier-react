/* External dependencies */
import React, { forwardRef, useMemo } from 'react'
import { isEmpty } from 'lodash-es'

/* Internal dependencies */
import { Typography } from 'Foundation'
import { Text } from 'Components/Text'
import { IconSize } from 'Components/Icon'
import type FormLabelProps from './FormLabel.types'
import * as Styled from './FormLabel.styled'

export const FORM_LABEL_TEST_ID = 'bezier-react-form-label'
export const FORM_LABEL_HELP_TEST_ID = 'bezier-react-form-label-help'

function FormLabel({
  testId = FORM_LABEL_TEST_ID,
  htmlFor,
  help,
  as = 'label',
  bold = true,
  typo = Typography.Size13,
  children,
  ...rest
}: FormLabelProps,
forwardedRef: React.Ref<HTMLLabelElement>,
) {
  const LabelComponent = useMemo(() => {
    if (isEmpty(children)) { return null }
    return (
      <Text
        {...rest}
        ref={forwardedRef}
        testId={testId}
        as={as}
        // @ts-ignore HTMLLabelElement Property
        htmlFor={htmlFor}
        bold={bold}
        typo={typo}
      >
        { children }
      </Text>
    )
  }, [
    as,
    rest,
    typo,
    bold,
    testId,
    htmlFor,
    children,
    forwardedRef,
  ])

  if (!LabelComponent) { return null }

  return isEmpty(help)
    ? (
      <>
        { LabelComponent }
      </>
    )
    : (
      <Styled.Center>
        { LabelComponent }
        <Styled.Tooltip content={help}>
          <Styled.HelpIcon
            testId={FORM_LABEL_HELP_TEST_ID}
            name="help-filled"
            size={IconSize.XS}
            color="txt-black-dark"
          />
        </Styled.Tooltip>
      </Styled.Center>
    )
}

export default forwardRef(FormLabel)
