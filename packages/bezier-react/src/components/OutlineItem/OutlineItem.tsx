import React, {
  forwardRef,
  useMemo,
} from 'react'

import {
  ChevronSmallDownIcon,
  ChevronSmallRightIcon,
  isBezierIcon,
} from '@channel.io/bezier-icons'
import classNames from 'classnames'

import { createContext } from '~/src/utils/react'
import {
  isEmpty,
  isNil,
} from '~/src/utils/type'

import {
  Icon,
  IconSize,
} from '~/src/components/Icon'
import { Text } from '~/src/components/Text'

import {
  type OutlineItemContextProps,
  type OutlineItemProps,
} from './OutlineItem.types'

import styles from './OutlineItem.module.scss'

const [
  OutlineItemContextProvider,
  useOutlineItemContext,
] = createContext<OutlineItemContextProps | undefined>(undefined)

export const OUTLINE_ITEM_TEST_ID = 'bezier-react-outline-item'

const INDENT = 16

export const OutlineItem = forwardRef<HTMLDivElement & HTMLAnchorElement, OutlineItemProps>(function OutlineItem({
  children,
  style,
  className,
  as,
  open = false,
  disableChevron = false,
  paddingLeft: paddingLeftProp = 0,
  active = false,
  focused = false,
  leftContent,
  content,
  rightContent,
  href,
  testId = OUTLINE_ITEM_TEST_ID,
  ...rest
}, forwardedRef) {
  const context = useOutlineItemContext()
  const isRoot = isNil(context)
  const paddingLeft = (isRoot ? 0 : context.paddingLeft + INDENT) + paddingLeftProp

  const isLink = !isEmpty(href)
  const Comp = isLink ? 'a' : (as ?? 'div') as 'div'

  return (
    <>
      <Comp
        {...rest}
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
          active && styles.active,
          focused && styles.focused,
          className,
        )}
        ref={forwardedRef}
        data-testid={testId}
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

      <OutlineItemContextProvider value={useMemo(() => ({ paddingLeft }), [paddingLeft])}>
        { open && children }
      </OutlineItemContextProvider>
    </>
  )
})
