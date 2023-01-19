/* External dependencies */
import React from 'react'
import { isEmpty } from 'lodash-es'

/* Internal dependencies */
import type HelpProps from './Help.types'
import * as Styled from './Help.styled'
import { IconSize, HelpFilledIcon } from '~/src/components/Icon'

export const HELP_TEST_ID = 'bezier-react-help'
export const HELP_DISPLAY_NAME = 'Help'

function Help({
  children,
  ...rest
}: HelpProps) {
  if (isEmpty(children)) { return null }

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

Help.displayName = HELP_DISPLAY_NAME

export default Help
