'use client'
import { forwardRef, useMemo } from 'react'
import * as React from 'react'

import {
  ChevronSmallDownIcon,
  ChevronSmallRightIcon,
  isBezierIcon,
} from '@channel.io/bezier-icons'
import classNames from 'classnames'

import { createContext } from '~/src/utils/react'
import { isEmpty, isNil } from '~/src/utils/type'

import { BaseButton } from '~/src/components/BaseButton'
import { Icon } from '~/src/components/Icon'
import { Text } from '~/src/components/Text'

import {
  type OutlineItemContextProps,
  type OutlineItemProps,
} from './OutlineItem.types'

import styles from './OutlineItem.module.scss'

const [OutlineItemContextProvider, useOutlineItemContext] = createContext<
  OutlineItemContextProps | undefined
>(undefined)

const DEFAULT_INDENT = 16

export const OUTLINE_ITEM_TEST_ID = 'bezier-outline-item'

export const OutlineItem = forwardRef<HTMLElement, OutlineItemProps>(
  function OutlineItem(
    {
      children,
      style,
      className,
      as,
      open = false,
      disableChevron = false,
      active = false,
      focused = false,
      clickable: clickableProp = false,
      leftContent,
      content,
      rightContent,
      href,
      onClick,
      ...rest
    },
    forwardedRef
  ) {
    const context = useOutlineItemContext()
    const isRoot = isNil(context)
    const indent = isRoot ? 0 : context.indent + DEFAULT_INDENT

    const isLink = !isEmpty(href)
    const isButton = !isNil(onClick)
    const Comp = isLink ? 'a' : isButton ? BaseButton : ((as ?? 'div') as 'div')
    const clickable = isLink || clickableProp || isButton

    return (
      <>
        <Comp
          {...(isLink && {
            href,
            target: '_blank',
            rel: 'noopener noreferrer',
          })}
          // @ts-expect-error
          ref={forwardedRef}
          style={
            {
              ...style,
              '--b-outline-item-indent': `${indent}px`,
            } as React.CSSProperties
          }
          className={classNames(
            styles.OutlineItem,
            active && styles.active,
            focused && styles.focused,
            clickable && styles.clickable,
            className
          )}
          data-testid={OUTLINE_ITEM_TEST_ID}
          onClick={onClick}
          {...rest}
        >
          {!disableChevron && (
            <div className={styles.Chevron}>
              {!isNil(children) && (
                <Icon
                  className={styles.Icon}
                  source={open ? ChevronSmallDownIcon : ChevronSmallRightIcon}
                  size="s"
                  color="text-neutral-lighter"
                />
              )}
            </div>
          )}

          {leftContent && (
            <div className={styles.LeftContent}>
              {isBezierIcon(leftContent) ? (
                <Icon
                  className={styles.Icon}
                  size="s"
                  source={leftContent}
                  color="text-neutral-lighter"
                />
              ) : (
                leftContent
              )}
            </div>
          )}

          <Text
            className={styles.Content}
            typo="14"
            truncated
          >
            {content}
          </Text>

          {rightContent}
        </Comp>

        <OutlineItemContextProvider
          value={useMemo(() => ({ indent }), [indent])}
        >
          {open && children}
        </OutlineItemContextProvider>
      </>
    )
  }
)
