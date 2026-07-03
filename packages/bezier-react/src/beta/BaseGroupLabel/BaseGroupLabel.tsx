'use client'

import { forwardRef } from 'react'

import classNames from 'classnames'

import { Help } from '~/src/beta/Help'
import { Text } from '~/src/beta/Text'

import type {
  BaseGroupLabelProps,
  BaseGroupLabelVariant,
} from './BaseGroupLabel.types'

import styles from './BaseGroupLabel.module.scss'

function getTextColor(variant: BaseGroupLabelVariant) {
  return variant === 'neutral-dark' ? 'text-neutral' : 'text-neutral-lighter'
}

export const BaseGroupLabel = forwardRef<HTMLDivElement, BaseGroupLabelProps>(
  function BaseGroupLabel(
    {
      className,
      content,
      contentAs = 'span',
      contentId,
      help,
      trailingContent,
      variant = 'neutral-dark',
      ...rest
    },
    forwardedRef
  ) {
    return (
      <div
        ref={forwardedRef}
        className={classNames(
          styles.BaseGroupLabel,
          styles[`variant-${variant}`],
          className
        )}
        {...rest}
      >
        <div className={styles.MainContent}>
          {typeof content === 'string' ? (
            <Text
              id={contentId}
              as={contentAs}
              className={styles.Content}
              typo="13"
              color={getTextColor(variant)}
              bold
              truncated
            >
              {content}
            </Text>
          ) : (
            <div
              id={contentId}
              className={styles.Content}
            >
              {content}
            </div>
          )}

          {help != null && (
            <div className={styles.Help}>
              <Help>{help}</Help>
            </div>
          )}
        </div>

        {trailingContent != null && (
          <div className={styles.TrailingContent}>{trailingContent}</div>
        )}
      </div>
    )
  }
)
