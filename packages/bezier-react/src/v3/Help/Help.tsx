'use client'

import { forwardRef } from 'react'

import { HelpFilledIcon } from '@channel.io/bezier-icons'

import { isEmpty } from '~/src/utils/type'
import { Icon } from '~/src/v3/Icon'
import { Tooltip } from '~/src/v3/Tooltip'

import { type HelpProps } from './Help.types'

import styles from './Help.module.scss'

export const HELP_TEST_ID = 'bezier-v3-help'
export const HELP_DISPLAY_NAME = 'Help'

/**
 * `Help` shows a help icon with tooltip content.
 */
export const Help = forwardRef<HTMLDivElement, HelpProps>(function Help(
  { children, placement = 'top-center', ...rest },
  forwardedRef
) {
  if (isEmpty(children)) {
    return null
  }

  return (
    <Tooltip
      {...rest}
      ref={forwardedRef}
      content={children}
      placement={placement}
    >
      <div className={styles.Help}>
        <Icon
          className={styles.Icon}
          source={HelpFilledIcon}
          size="16"
          color="icon-neutral"
          data-testid={HELP_TEST_ID}
        />
      </div>
    </Tooltip>
  )
})

Help.displayName = HELP_DISPLAY_NAME
