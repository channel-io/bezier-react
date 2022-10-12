/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { IconSize, HelpFilledIcon } from 'Components/Icon'
import type FormLabelHelpProps from './FormLabelHelp.types'
import * as Styled from './FormLabelHelp.styled'

export const FORM_LABEL_HELP_TEST_ID = 'bezier-react-form-label-help'

function FormLabelHelp({
  children,
  ...rest
}: FormLabelHelpProps) {
  return (
    <Styled.Tooltip {...rest} content={children}>
      <Styled.Icon
        testId={FORM_LABEL_HELP_TEST_ID}
        source={HelpFilledIcon}
        size={IconSize.XS}
        color="txt-black-dark"
      />
    </Styled.Tooltip>
  )
}

export default FormLabelHelp
