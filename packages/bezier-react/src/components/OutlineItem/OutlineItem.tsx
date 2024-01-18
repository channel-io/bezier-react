import React, { forwardRef } from 'react'

import {
  ChevronSmallDownIcon,
  ChevronSmallRightIcon,
  isBezierIcon,
} from '@channel.io/bezier-icons'
import classNames from 'classnames'

import { noop } from '~/src/utils/function'
import {
  isEmpty,
  isNil,
} from '~/src/utils/type'

import {
  Icon,
  IconSize,
} from '~/src/components/Icon'
import { Text } from '~/src/components/Text'

import type OutlineItemProps from './OutlineItem.types'
import {
  OutlineItemContextProvider,
  useOutlineItemContext,
} from './OutlineItemContext'

import styles from './OutlineItem.module.scss'

const LIST_GROUP_PADDING_LEFT = 16

export const OUTLINE_ITEM_TEST_ID = 'bezier-react-outline-item'
export const OUTLINE_ITEM_LEFT_ICON_TEST_ID = 'bezier-react-outline-item-left-icon'

function OutlineItem(
  {
    as,
    testId = OUTLINE_ITEM_TEST_ID,
    leftIconTestId = OUTLINE_ITEM_LEFT_ICON_TEST_ID,
    style,
    className,
    paddingLeft: givenPaddingLeft,
    open = false,
    active: givenActive,
    focused = false,
    leftContent,
    disableChevron = false,
    href,
    content = null,
    rightContent = null,
    /* HTMLAttribute props */
    onClick: givenOnClick = noop,
    children,
  }: OutlineItemProps,
  forwardedRef: React.Ref<HTMLElement>,
) {
  const outlineItemContext = useOutlineItemContext({
    paddingLeft: givenPaddingLeft,
    active: givenActive,
    onClick: givenOnClick,
  }, LIST_GROUP_PADDING_LEFT)

  const { paddingLeft, active, onClick } = outlineItemContext

  const isLink = !isEmpty(href)
  const Comp = isLink ? 'a' : (as ?? 'div') as 'div'

  return (
    <>
      <Comp
        {...isLink && {
          href,
          target: '_blank',
          rel: 'noopener noreferrer',
        }}
        style={{
          ...style,
          '--b-outline-item-indent': `${paddingLeft}px`,
        } as React.CSSProperties}
        className={classNames(
          styles.OutlineItem,
          !isLink && active && styles.active,
          focused && styles.focused,
          className,
        )}
        ref={forwardedRef}
        data-testid={testId}
        onClick={onClick}
      >
        { !disableChevron && (
          <div className={styles.Chevron}>
            { !isNil(children) && (
              <Icon
                className={styles.Icon}
                source={open ? ChevronSmallDownIcon : ChevronSmallRightIcon}
                size={IconSize.XS}
                color="txt-black-dark"
              />
            ) }
          </div>
        ) }

        { leftContent && (
          <div className={styles.LeftContent}>
            { isBezierIcon(leftContent)
              ? (
                <Icon
                  className={styles.Icon}
                  size={IconSize.S}
                  source={leftContent}
                  color="txt-black-dark"
                  testId={leftIconTestId}
                />
              )
              : leftContent }
          </div>
        ) }

        <Text
          className={styles.Content}
          typo="14"
          truncated
        >
          { content }
        </Text>

        { rightContent }
      </Comp>

      { open && (
        <OutlineItemContextProvider value={outlineItemContext}>
          { children }
        </OutlineItemContextProvider>
      ) }
    </>
  )
}

export default forwardRef(OutlineItem)
