'use client'

import { forwardRef } from 'react'

import { isBezierIcon } from '@channel.io/bezier-icons'
import classNames from 'classnames'

import {
  type ButtonProps,
  type ButtonSize,
} from '~/src/components/AlphaButton/Button.types'
import { AlphaLoader } from '~/src/components/AlphaLoader'
import { BaseButton } from '~/src/components/BaseButton'
import { Icon, type IconSize } from '~/src/components/Icon'
import { Text } from '~/src/components/Text'

import styles from './Button.module.scss'

function SideContent({
  size,
  content,
}: {
  size: IconSize
  content?: ButtonProps['prefixContent']
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

function getIconSize(size: ButtonSize) {
  return (
    {
      xs: 'xs',
      s: 'xs',
      m: 's',
      l: 's',
      xl: 'm',
    } as const
  )[size]
}

function getTypography(size: ButtonSize) {
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

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
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
      disabled: disabledProp,
      ...rest
    },
    forwardedRef
  ) {
    const Comp = as as typeof BaseButton

    const disabled = loading || disabledProp

    return (
      <Comp
        ref={forwardedRef}
        className={classNames(
          styles.Button,
          styles[`size-${size}`],
          styles[`variant-${variant}`],
          styles[`color-${color}`],
          active && styles.active,
          className
        )}
        disabled={disabled}
        {...rest}
      >
        <div
          className={classNames(
            styles.ButtonContent,
            loading && styles.loading
          )}
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

        {loading && (
          <div
            className={classNames(
              styles.ButtonLoader,
              // NOTE: Loader size is the same as icon size
              styles[`size-${getIconSize(size)}`]
            )}
          >
            <AlphaLoader
              size="s"
              className={styles.Loader}
              variant={variant === 'primary' ? 'on-overlay' : 'secondary'}
            />
          </div>
        )}
      </Comp>
    )
  }
)
