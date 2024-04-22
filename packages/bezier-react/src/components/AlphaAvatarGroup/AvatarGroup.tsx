import React, { forwardRef, useCallback, useMemo } from 'react'

import { MoreIcon } from '@channel.io/bezier-icons'
import classNames from 'classnames'

import { isLastIndex } from '~/src/utils/array'
import { px } from '~/src/utils/style'

import {
  type AvatarProps,
  type AvatarSize,
  useAvatarRadiusToken,
} from '~/src/components/Avatar'
import { Icon } from '~/src/components/Icon'
import { SmoothCornersBox } from '~/src/components/SmoothCornersBox'
import { Text } from '~/src/components/Text'

import { type AvatarGroupProps } from './AvatarGroup.types'

import styles from './AvatarGroup.module.scss'

const MAX_AVATAR_LIST_COUNT = 99
const AVATAR_GROUP_DEFAULT_SPACING = 4
export const AVATAR_GROUP_ELLIPSIS_ICON_TEST_ID =
  'bezier-avatar-group-ellipsis-icon'

function getRestAvatarListCountText(count: number, max: number) {
  const restCount = count - max
  return `+${restCount > MAX_AVATAR_LIST_COUNT ? MAX_AVATAR_LIST_COUNT : restCount}`
}

// TODO: Not specified
function getProperIconSize(avatarSize: AvatarSize) {
  return (
    {
      20: 'xxs',
      24: 'xs',
      30: 's',
      36: 'm',
      42: 'm',
      48: 'l',
      72: 'l',
      90: 'l',
      120: 'l',
    } as const
  )[avatarSize]
}

// TODO: Not specified
function getProperTypoSize(avatarSize: AvatarSize) {
  return (
    {
      20: '12',
      24: '13',
      30: '15',
      36: '16',
      42: '18',
      48: '24',
      72: '24',
      90: '24',
      120: '24',
    } as const
  )[avatarSize]
}

/**
 * `AvatarGroup` is a component for grouping `Avatar` components
 * @example
 *
 * ```tsx
 * <AvatarGroup
 *  max={2}
 *  spacing={4}
 *  ellipsisType="icon"
 * >
 *    <Avatar />
 *    <Avatar />
 *    <Avatar />
 * </AvatarGroup>
 * ```
 */
export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  function AvatarGroup(
    {
      max = 5,
      size = '24',
      spacing = AVATAR_GROUP_DEFAULT_SPACING,
      ellipsisType = 'icon',
      style,
      className,
      children,
      ...rest
    },
    forwardedRef
  ) {
    const AVATAR_BORDER_RADIUS = useAvatarRadiusToken()
    const avatarListCount = React.Children.count(children)

    const renderAvatarElement = useCallback(
      (avatar: React.ReactElement<AvatarProps>) => {
        const key =
          avatar.key ?? `${avatar.props.name}-${avatar.props.avatarUrl}`
        const shouldShowBorder = max > 1 && avatarListCount > 1 && spacing < 0
        const showBorder = avatar.props.showBorder || shouldShowBorder
        return React.cloneElement(avatar, { key, size, showBorder })
      },
      [avatarListCount, max, size, spacing]
    )

    const AvatarListComponent = useMemo(() => {
      const slicedAvatarList = React.Children.toArray(children).slice(0, max)

      return slicedAvatarList.map((avatar, index, arr) => {
        if (!React.isValidElement<AvatarProps>(avatar)) {
          return null
        }

        const AvatarElement = renderAvatarElement(avatar)

        if (!isLastIndex(arr, index)) {
          return AvatarElement
        }

        if (ellipsisType === 'icon') {
          return (
            <div
              key="ellipsis"
              className={styles.AvatarEllipsisIconWrapper}
              data-testid={AVATAR_GROUP_ELLIPSIS_ICON_TEST_ID}
            >
              <SmoothCornersBox
                borderRadius={AVATAR_BORDER_RADIUS}
                backgroundColor="bgtxt-absolute-black-lightest"
                className={styles.AvatarEllipsisIcon}
              >
                <Icon
                  source={MoreIcon}
                  size={getProperIconSize(size)}
                  color="bgtxt-absolute-white-dark"
                />
              </SmoothCornersBox>
              {AvatarElement}
            </div>
          )
        }

        if (ellipsisType === 'count') {
          return (
            <React.Fragment key="ellipsis">
              {AvatarElement}
              <div
                style={
                  {
                    '--b-avatar-group-ellipsis-ml': px(
                      Math.max(spacing, AVATAR_GROUP_DEFAULT_SPACING)
                    ),
                  } as React.CSSProperties
                }
                className={classNames(styles.AvatarEllipsisCountWrapper)}
              >
                <Text
                  typo={getProperTypoSize(size)}
                  color="txt-black-dark"
                  className={styles.AvatarEllipsisCount}
                >
                  {getRestAvatarListCountText(avatarListCount, max)}
                </Text>
              </div>
            </React.Fragment>
          )
        }

        return null
      })
    }, [
      avatarListCount,
      max,
      children,
      renderAvatarElement,
      ellipsisType,
      AVATAR_BORDER_RADIUS,
      size,
      spacing,
    ])

    return (
      <div
        role="group"
        ref={forwardedRef}
        className={classNames(
          styles.AvatarGroup,
          styles[`size-${size}`],
          className
        )}
        style={
          {
            '--b-avatar-group-spacing': px(spacing),
            ...style,
          } as React.CSSProperties
        }
        {...rest}
      >
        {AvatarListComponent}
      </div>
    )
  }
)
