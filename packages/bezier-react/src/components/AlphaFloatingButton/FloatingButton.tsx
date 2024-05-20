import React, { forwardRef } from 'react'

import { isBezierIcon } from '@channel.io/bezier-icons'
import classNames from 'classnames'

import {
  type FloatingButtonProps,
  type FloatingButtonSize,
} from '~/src/components/AlphaFloatingButton/FloatingButton.types'
import { BaseButton } from '~/src/components/BaseButton'
import { Icon, type IconSize } from '~/src/components/Icon'
import { Spinner } from '~/src/components/Spinner'
import { Text } from '~/src/components/Text'

import styles from './FloatingButton.module.scss'

function SideContent({
  size,
  content,
}: {
  size: IconSize
  content?: FloatingButtonProps['prefixContent']
}) {
  return isBezierIcon(content) ? (
    <Icon
      source={content}
      size={size}
      className={styles.ButtonIcon}
    />
  ) : (
    content
  )
}

function getIconSize(size: FloatingButtonSize) {
  return (
    {
      xs: 'xxs',
      s: 'xs',
      m: 's',
      l: 's',
      xl: 'm',
    } as const
  )[size]
}

function getSpinnerSize(size: FloatingButtonSize) {
  return (
    {
      xs: 'xs',
      s: 'xs',
      m: 's',
      l: 's',
      xl: 's',
    } as const
  )[size]
}

function getTypography(size: FloatingButtonSize) {
  return (
    {
      xs: '13',
      s: '13',
      m: '14',
      l: '15',
      xl: '18',
    } as const
  )[size]
}

export const FloatingButton = forwardRef<
  HTMLButtonElement,
  FloatingButtonProps
>(function Button(
  {
    as = BaseButton,
    text,
    prefixContent,
    suffixContent,
    color = 'blue',
    variant = 'primary',
    size = 'm',
    active,
    className,
    loading,
    ...rest
  },
  forwardedRef
) {
  const Comp = as as typeof BaseButton

  return (
    <Comp
      ref={forwardedRef}
      className={classNames(
        styles.FloatingButton,
        styles[`size-${size}`],
        styles[`variant-${variant}`],
        styles[`color-${color}`],
        active && styles.active,
        className
      )}
      {...rest}
    >
      <div
        className={classNames(styles.ButtonContent, loading && styles.loading)}
      >
        <SideContent
          size={getIconSize(size)}
          content={prefixContent}
        />

        {/* TODO: use AlphaText later, add typo */}
        <Text
          className={styles.ButtonText}
          typo={getTypography(size)}
          bold
        >
          {text}
        </Text>

        <SideContent
          size={getIconSize(size)}
          content={suffixContent}
        />
      </div>

      {/* TODO: use AlphaSpinner */}
      {loading && (
        <div className={styles.ButtonLoader}>
          <Spinner size={getSpinnerSize(size)} />
        </div>
      )}
    </Comp>
  )
})
