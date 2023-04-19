import React from 'react'

import { HelpFilledIcon } from '@channel.io/bezier-icons'

import { isEmpty } from '~/src/utils/typeUtils'

import { IconSize } from '~/src/components/Icon'
import { Tooltip } from '~/src/components/Tooltip'

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
    <Tooltip
      {...rest}
      content={children}
    >
      <Styled.Trigger>
        <Styled.Icon
          testId={HELP_TEST_ID}
          source={HelpFilledIcon}
          size={IconSize.XS}
          color="txt-black-dark"
        />
      </Styled.Trigger>
    </Tooltip>
  )
}

Help.displayName = HELP_DISPLAY_NAME

export default Help
