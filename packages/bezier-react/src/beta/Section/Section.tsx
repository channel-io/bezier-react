'use client'

import { Fragment, forwardRef, useEffect, useId, useState } from 'react'
import * as React from 'react'

import { isBezierIcon } from '@channel.io/bezier-icons'
import classNames from 'classnames'



import { BaseGroupLabel } from '~/src/beta/BaseGroupLabel'
import { BaseItem } from '~/src/beta/BaseItem/BaseItem'
import { Text } from '~/src/beta/Text'
import {
  getMarginStyles,
  splitByMarginProps,
} from '~/src/types/props-helpers'
import { createContext } from '~/src/utils/react'

import type {
  SectionItemProps,
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
    const isLink = 'href' in rest && rest.href != null
    const isButton = 'onClick' in rest && rest.onClick != null

    const itemClassName = classNames(
      styles.SectionItem,
      active && styles.active,
      className
    )
    const itemDescription =
      typeof description === 'string' ? (
        <Text
          typo="12"
          color="text-neutral-lighter"
        >
          {renderTextWithNewLine(description)}
        </Text>
      ) : (
        description
    )

    if (isLink) {
      const { href, onClick, ...anchorRest } = rest

      return (
        <BaseItem
          as="a"
          ref={forwardedRef as React.Ref<HTMLAnchorElement>}
          className={itemClassName}
          data-testid={SECTION_ITEM_TEST_ID}
          aria-disabled={disabled || undefined}
          href={href}
          draggable={false}
          active={active}
          disabled={disabled}
          interactive
          leadingContent={leadingContent}
          trailingContent={trailingContent}
          description={itemDescription}
          {...anchorRest}
          tabIndex={disabled ? -1 : anchorRest.tabIndex}
          onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
            if (disabled) {
              event.preventDefault()
              event.stopPropagation()
              return
            }

            onClick?.(event)
          }}
        >
          {content}
        </BaseItem>
      )
    }

    if (isButton) {
      return (
        <BaseItem
          as="button"
          ref={forwardedRef as React.Ref<HTMLButtonElement>}
          className={itemClassName}
          data-testid={SECTION_ITEM_TEST_ID}
          aria-disabled={disabled || undefined}
          type={rest.type ?? 'button'}
          active={active}
          disabled={disabled}
          interactive
          leadingContent={leadingContent}
          trailingContent={trailingContent}
          description={itemDescription}
          {...rest}
        >
          {content}
        </BaseItem>
      )
    }

    return (
      <BaseItem
        as="div"
        ref={forwardedRef as React.Ref<HTMLDivElement>}
        className={itemClassName}
        data-testid={SECTION_ITEM_TEST_ID}
        aria-disabled={disabled || undefined}
        active={active}
        disabled={disabled}
        leadingContent={leadingContent}
        trailingContent={trailingContent}
        description={itemDescription}
        {...rest}
      >
        {content}
      </BaseItem>
    )
  }
)

export const SectionLabel = forwardRef<HTMLDivElement, SectionLabelProps>(
  function SectionLabel(
    {
      className,
      content,
      trailingContent,
      help,
      variant,
      ...rest
    },
    forwardedRef
  ) {
    const { labelId, registerLabel } = useSectionContext('SectionLabel')

    useEffect(() => registerLabel(), [registerLabel])

    return (
      <div className={styles.SectionHeader}>
        <BaseGroupLabel
          ref={forwardedRef}
          className={classNames(styles.SectionLabel, className)}
          data-testid={SECTION_LABEL_TEST_ID}
          content={content}
          contentAs="h3"
          contentId={labelId}
          help={help}
          trailingContent={
            trailingContent != null ? (
              <SectionLabelSideContentElement content={trailingContent} />
            ) : undefined
          }
          variant={variant}
          {...rest}
        />
      </div>
    )
  }
)

const SectionRoot = forwardRef<HTMLElement, SectionProps>(
  function Section(props, forwardedRef) {
    const [marginProps, marginRest] = splitByMarginProps(props)
    const marginStyles = getMarginStyles(marginProps)
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
