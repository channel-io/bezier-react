'use client'

import { Fragment, forwardRef, useEffect, useId, useState } from 'react'
import * as React from 'react'

import { isBezierIcon } from '@channel.io/bezier-icons'
import classNames from 'classnames'



import { Help } from '~/src/beta/Help'
import { Text } from '~/src/beta/Text'
import {
  getBetaMarginStyles,
  splitByBetaMarginProps,
} from '~/src/types/props-helpers'
import { createContext } from '~/src/utils/react'

import type {
  SectionItemProps,
  SectionItemSideContent,
  SectionLabelProps,
  SectionLabelSideContent,
  SectionProps,
} from './Section.types'

import styles from './Section.module.scss'



export const SECTION_TEST_ID = 'bezier-beta-section'
export const SECTION_ITEM_TEST_ID = 'bezier-beta-section-item'
export const SECTION_LABEL_TEST_ID = 'bezier-beta-section-label'

type SectionContextValue = {
  labelId: string
  registerLabel: () => () => void
}

const [SectionContextProvider, useSectionContext] =
  createContext<SectionContextValue | null>(null, 'Section')

function renderTextWithNewLine(value: string) {
  return value.split('\n').map((line, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <Fragment key={index}>
      {index !== 0 && <br />}
      {line}
    </Fragment>
  ))
}

function SectionItemSideContentElement({
  content,
}: {
  content?: SectionItemSideContent
}) {
  if (isBezierIcon(content)) {
    const SourceElement = content

    return (
      <SourceElement
        className={styles.ItemIcon}
        aria-hidden
      />
    )
  }

  return content
}

function SectionLabelSideContentElement({
  content,
}: {
  content?: SectionLabelSideContent
}) {
  if (isBezierIcon(content)) {
    const SourceElement = content

    return (
      <SourceElement
        className={styles.LabelIcon}
        aria-hidden
      />
    )
  }

  return content
}

export const SectionItem = forwardRef<HTMLElement, SectionItemProps>(
  function SectionItem(props, forwardedRef) {
    const {
      className,
      content,
      description,
      leadingContent,
      trailingContent,
      active = false,
      disabled = false,
      ...rest
    } = props
    const hasLeadingContent = leadingContent != null
    const hasDescription = description != null
    const isLink = 'href' in rest && rest.href != null
    const isButton = 'onClick' in rest && rest.onClick != null
    const isInteractive = isLink || isButton
    const Component = (
      isLink ? 'a' : isButton ? 'button' : 'div'
    ) as React.ElementType

    const handleDisabledLinkClick = (
      event: React.MouseEvent<HTMLAnchorElement>
    ) => {
      if (disabled) {
        event.preventDefault()
        event.stopPropagation()
      }
    }

    return (
      <Component
        ref={forwardedRef as React.Ref<HTMLElement>}
        className={classNames(
          styles.SectionItem,
          active && styles.active,
          disabled && styles.disabled,
          isInteractive && styles.interactive,
          className
        )}
        data-testid={SECTION_ITEM_TEST_ID}
        aria-disabled={disabled || undefined}
        {...(isButton && { type: rest.type ?? 'button' })}
        {...rest}
        {...(isLink && {
          draggable: false,
          tabIndex: disabled ? -1 : rest.tabIndex,
          onClick: handleDisabledLinkClick,
        })}
        {...(isButton && { disabled })}
      >
        <div
          className={classNames(
            styles.ItemContent,
            !hasLeadingContent && styles['without-leading-content'],
            hasDescription && styles['has-description']
          )}
        >
          {hasLeadingContent && (
            <div className={styles.ItemLeadingContent}>
              <SectionItemSideContentElement content={leadingContent} />
            </div>
          )}

          <div className={styles.ItemMainContent}>
            {typeof content === 'string' ? (
              <Text
                typo="14"
                truncated
              >
                {content}
              </Text>
            ) : (
              content
            )}
          </div>

          {description != null && (
            <div className={styles.ItemDescription}>
              {typeof description === 'string' ? (
                <Text
                  typo="12"
                  color="text-neutral-light"
                >
                  {renderTextWithNewLine(description)}
                </Text>
              ) : (
                description
              )}
            </div>
          )}
        </div>

        {trailingContent != null && (
          <div className={styles.ItemTrailingContent}>
            <SectionItemSideContentElement content={trailingContent} />
          </div>
        )}
      </Component>
    )
  }
)

export const SectionLabel = forwardRef<HTMLDivElement, SectionLabelProps>(
  function SectionLabel(
    {
      className,
      content,
      leadingContent,
      trailingContent,
      help,
      ...rest
    },
    forwardedRef
  ) {
    const { labelId, registerLabel } = useSectionContext('SectionLabel')

    useEffect(() => registerLabel(), [registerLabel])

    return (
      <div className={styles.SectionHeader}>
        <div
          ref={forwardedRef}
          className={classNames(styles.SectionLabelRow, className)}
          data-testid={SECTION_LABEL_TEST_ID}
          {...rest}
        >
          {leadingContent != null && (
            <div className={styles.SectionLabelLeadingContent}>
              <SectionLabelSideContentElement content={leadingContent} />
            </div>
          )}

          {typeof content === 'string' ? (
            <Text
              id={labelId}
              as="h3"
              className={styles.SectionHeading}
              typo="13"
              color="text-neutral-lighter"
              bold
              truncated
            >
              {content}
            </Text>
          ) : (
            <div
              id={labelId}
              className={styles.SectionLabel}
            >
              {content}
            </div>
          )}

          {help != null && (
            <div className={styles.SectionHelp}>
              <Help>{help}</Help>
            </div>
          )}

          {trailingContent != null && (
            <div className={styles.SectionLabelTrailingContent}>
              <SectionLabelSideContentElement content={trailingContent} />
            </div>
          )}
        </div>
      </div>
    )
  }
)

const SectionRoot = forwardRef<HTMLElement, SectionProps>(
  function Section(props, forwardedRef) {
    const [marginProps, marginRest] = splitByBetaMarginProps(props)
    const marginStyles = getBetaMarginStyles(marginProps)
    const generatedLabelId = useId()
    const [labelCount, setLabelCount] = useState(0)

    const {
      children,
      className,
      style,
      'aria-labelledby': ariaLabelledBy,
      ...rest
    } = marginRest
    const labelledBy =
      ariaLabelledBy ?? (labelCount > 0 ? generatedLabelId : undefined)
    const registerLabel = React.useCallback(() => {
      setLabelCount((count) => count + 1)

      return () => {
        setLabelCount((count) => count - 1)
      }
    }, [])

    return (
      <SectionContextProvider
        value={{
          labelId: generatedLabelId,
          registerLabel,
        }}
      >
        <section
          ref={forwardedRef}
          style={{ ...marginStyles.style, ...style }}
          className={classNames(
            styles.Section,
            marginStyles.className,
            className
          )}
          aria-labelledby={labelledBy}
          data-testid={SECTION_TEST_ID}
          {...rest}
        >
          <div className={styles.SectionBody}>{children}</div>
        </section>
      </SectionContextProvider>
    )
  }
)

export const Section = SectionRoot
