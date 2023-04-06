/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { isEmpty } from '~/src/utils/typeUtils'

import {
  HelpFilledIcon,
  IconSize,
} from '~/src/components/Icon'

import type HelpProps from './Help.types'

import * as Styled from './Help.styled'

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
