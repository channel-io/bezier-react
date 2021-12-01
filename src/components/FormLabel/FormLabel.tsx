/* External dependencies */
import React, { useMemo } from 'react'
import { isEmpty } from 'lodash-es'

/* Internal dependencies */
import { Typography } from '../../foundation'
import { Text } from '../Text'
import { Icon, IconSize } from '../Icon'
import type FormLabelProps from './FormLabel.types'
import * as Styled from './FormLabel.styled'

const FORM_LABEL_TEST_ID = 'bezier-react-form-label'

function FormLabel({
  testId = FORM_LABEL_TEST_ID,
  htmlFor,
  help,
  children,
  ...rest
}: FormLabelProps) {
  const LabelComponent = useMemo(() => (
    <Text
      {...rest}
      testId={testId}
      as="label"
      // @ts-ignore HTMLLabelElement Property
      htmlFor={htmlFor}
      bold
      typo={Typography.Size13}
    >
      { children }
    </Text>
  ), [
    rest,
    testId,
    htmlFor,
    children,
  ])

  if (isEmpty(help)) {
    return (
      <>
        { LabelComponent }
      </>
    )
  }

  return (
    <Styled.Flex>
      { LabelComponent }
      <Styled.Tooltip content={help}>
        <Icon
          name="help-filled"
          size={IconSize.XS}
          color="txt-black-dark"
          hoverColor="txt-black-darkest"
        />
      </Styled.Tooltip>
    </Styled.Flex>
  )
}

export default FormLabel
