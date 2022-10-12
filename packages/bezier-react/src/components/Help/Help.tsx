/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { IconSize, HelpFilledIcon } from 'Components/Icon'
import type FormLabelHelpProps from './Help.types'
import * as Styled from './Help.styled'

export const HELP_TEST_ID = 'bezier-react-help'

function Help({
  children,
  ...rest
}: FormLabelHelpProps) {
  return (
    <Styled.Tooltip {...rest} content={children}>
      <Styled.Icon
        testId={HELP_TEST_ID}
        source={HelpFilledIcon}
        size={IconSize.XS}
        color="txt-black-dark"
      />
    </Styled.Tooltip>
  )
}

export default Help
