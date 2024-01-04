import React, { forwardRef } from 'react'

import { HelpFilledIcon } from '@channel.io/bezier-icons'

import { isEmpty } from '~/src/utils/type'

import {
  Icon,
  IconSize,
} from '~/src/components/Icon'
import { Tooltip } from '~/src/components/Tooltip'

import type HelpProps from './Help.types'

import styles from './Help.module.scss'

export const HELP_TEST_ID = 'bezier-react-help'
export const HELP_DISPLAY_NAME = 'Help'

const Help = forwardRef<HTMLDivElement, HelpProps>(function Help({
  children,
  ...rest
}, forwardedRef) {
  if (isEmpty(children)) { return null }

  return (
    <Tooltip
      {...rest}
      ref={forwardedRef}
      content={children}
    >
      <div className={styles.Help}>
        <Icon
          className={styles.Icon}
          testId={HELP_TEST_ID}
          source={HelpFilledIcon}
          size={IconSize.XS}
          color="txt-black-dark"
        />
      </div>
    </Tooltip>
  )
})

Help.displayName = HELP_DISPLAY_NAME

export default Help
