'use client'

import { type CSSProperties, forwardRef } from 'react'

import { isBezierIcon } from '@channel.io/bezier-icons'
import classNames from 'classnames'

import { BaseButton } from '~/src/beta/BaseButton'
import { Spinner } from '~/src/beta/Spinner'

import {
  type IconButtonContent,
  type IconButtonProps,
  type IconButtonSize,
} from './IconButton.types'

import styles from './IconButton.module.scss'




function getSpinnerSize(size: IconButtonSize) {
  return (
    {
      xs: '12',
      s: '12',
      m: '12',
      l: '16',
    } as const
  )[size]
}

function IconButtonContentElement({ content }: { content: IconButtonContent }) {
  if (isBezierIcon(content)) {
    const SourceElement = content

    return (
      <SourceElement
        className={styles.IconButtonIcon}
        aria-hidden
      />
    )
  }

  return <>{content}</>
}

/**
 * `IconButton` is a button that triggers a single icon-only action.
 * Provide an accessible name with `aria-label` or `aria-labelledby`.
 * @example
 *
 * ```tsx
 * <IconButton
 *   content={PlusIcon}
 *   aria-label="Add"
 * />
 * ```
 */
export const IconButton = forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  IconButtonProps
>(
  function IconButton(
    {
      as = 'button',
      className,
      content,
      loading = false,
      disabled: disabledProp = false,
      active = false,
      size = 'm',
      variant = 'ghost',
      semantic = 'secondary',
      ...rest
    },
    forwardedRef
  ) {
    const disabled = loading || disabledProp
    const iconButtonClassName = classNames(
      styles.IconButton,
      styles[`size-${size}`],
      styles[`variant-${variant}`],
      styles[`semantic-${semantic}`],
      active && styles.active,
      loading && styles.loading,
      className
    )
    const isNativeButton = as === 'button'
    const isNativeAnchor = as === 'a'
    const Comp = isNativeButton || isNativeAnchor ? BaseButton : as
    const compProps = isNativeAnchor
      ? {
          ...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>),
          as: 'a' as const,
        }
      : isNativeButton
        ? {
            ...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>),
            as: 'button' as const,
          }
        : rest

    return (
      <Comp
        ref={forwardedRef}
        {...compProps}
        className={iconButtonClassName}
        disabled={disabled}
        aria-busy={loading || undefined}
      >
        <div
          className={classNames(
            styles.IconButtonContent,
            loading && styles.loading
          )}
        >
          <IconButtonContentElement content={content} />
        </div>

        {loading && (
          <div className={styles.IconButtonLoader}>
            <Spinner
              size={getSpinnerSize(size)}
              style={
                {
                  '--b-beta-spinner-color':
                    'var(--b-beta-icon-button-spinner-color)',
                } as CSSProperties
              }
            />
          </div>
        )}
      </Comp>
    )
  }
)
