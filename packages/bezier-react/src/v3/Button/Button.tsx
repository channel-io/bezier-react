'use client'

import { type CSSProperties, forwardRef } from 'react'

import { isBezierIcon } from '@channel.io/bezier-icons'
import classNames from 'classnames'

import { BaseButton } from '~/src/v3/BaseButton'
import { Spinner } from '~/src/v3/Spinner'
import { Text } from '~/src/v3/Text'

import {
  type ButtonProps,
  type ButtonSideContent,
  type ButtonSize,
} from './Button.types'

import styles from './Button.module.scss'

function getTypography(size: ButtonSize) {
  return (
    {
      xs: '12',
      s: '13',
      m: '13',
      l: '14',
    } as const
  )[size]
}

function getSpinnerSize(size: ButtonSize) {
  return (
    {
      xs: '12',
      s: '12',
      m: '12',
      l: '16',
    } as const
  )[size]
}

function ButtonSideContentElement({
  content,
}: {
  content?: ButtonSideContent
}) {
  if (isBezierIcon(content)) {
    const SourceElement = content

    return (
      <SourceElement
        className={styles.ButtonIcon}
        aria-hidden
      />
    )
  }

  return <>{content}</>
}

/**
 * `Button` is a component that triggers a single action, such as clicking or submitting.
 * Use `IconButton` for icon-only actions.
 * @example
 *
 * ```tsx
 * <Button
 *   label="Button"
 *   variant="filled"
 *   semantic="primary"
 * />
 * ```
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      as = BaseButton,
      className,
      label,
      loading = false,
      disabled: disabledProp = false,
      active = false,
      size = 'm',
      variant = 'filled',
      semantic = 'primary',
      leadingContent,
      trailingContent,
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
          styles[`semantic-${semantic}`],
          active && styles.active,
          loading && styles.loading,
          className
        )}
        disabled={disabled}
        aria-busy={loading || undefined}
        {...rest}
      >
        <div
          className={classNames(
            styles.ButtonContent,
            loading && styles.loading
          )}
        >
          <ButtonSideContentElement content={leadingContent} />

          <Text
            className={styles.ButtonText}
            typo={getTypography(size)}
            fontWeight="500"
            style={
              {
                '--b-text-color': 'var(--b-v3-button-text-color)',
              } as CSSProperties
            }
            truncated
          >
            {label}
          </Text>

          <ButtonSideContentElement content={trailingContent} />
        </div>

        {loading && (
          <div className={styles.ButtonLoader}>
            <Spinner
              size={getSpinnerSize(size)}
              style={
                {
                  '--b-v3-spinner-color': 'var(--b-v3-button-spinner-color)',
                } as CSSProperties
              }
            />
          </div>
        )}
      </Comp>
    )
  }
)
