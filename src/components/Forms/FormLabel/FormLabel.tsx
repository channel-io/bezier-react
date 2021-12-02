/* External dependencies */
import React, { forwardRef, useMemo } from 'react'
import { isEmpty } from 'lodash-es'

/* Internal dependencies */
import { Typography } from '../../../foundation'
import { Text } from '../../Text'
import { IconSize } from '../../Icon'
import type FormLabelProps from './FormLabel.types'
import * as Styled from './FormLabel.styled'

export const FORM_LABEL_TEST_ID = 'bezier-react-form-label'
export const FORM_LABEL_HELP_TEST_ID = 'bezier-react-form-label-help'

function FormLabel({
  testId = FORM_LABEL_TEST_ID,
  htmlFor,
  help,
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
        as="label"
        // @ts-ignore HTMLLabelElement Property
        htmlFor={htmlFor}
        bold={bold}
        typo={typo}
      >
        { children }
      </Text>
    )
  }, [
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
      <Styled.Flex>
        { LabelComponent }
        <Styled.Tooltip content={help}>
          <Styled.HelpIcon
            testId={FORM_LABEL_HELP_TEST_ID}
            name="help-filled"
            size={IconSize.XS}
            color="txt-black-dark"
          />
        </Styled.Tooltip>
      </Styled.Flex>
    )
}

export default forwardRef(FormLabel)
