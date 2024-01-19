import React, { forwardRef } from 'react'

import { isBezierIcon } from '@channel.io/bezier-icons'
import classNames from 'classnames'

import { warn } from '~/src/utils/assert'
import {
  isArray,
  isEmpty,
  isNil,
  isNumber,
  isObject,
  isString,
} from '~/src/utils/type'

import {
  Button,
  ButtonColorVariant,
  ButtonSize,
  ButtonStyleVariant,
} from '~/src/components/Button'
import { Help } from '~/src/components/Help'
import {
  Icon,
  IconSize,
} from '~/src/components/Icon'
import {
  LegacyIcon,
  isIconName,
} from '~/src/components/LegacyIcon'
import { Text } from '~/src/components/Text'

import type {
  IconWithAction,
  SectionLabelLeftContent,
  SectionLabelProps,
  SectionLabelRightContent,
} from './SectionLabel.types'

import styles from './SectionLabel.module.scss'

export const SECTION_LABEL_TEST_ID = 'bezier-react-section-label'
export const SECTION_LABEL_TEST_CONTENT_ID = 'bezier-react-section-label-content'
export const SECTION_LABEL_TEST_LEFT_CONTENT_ID = 'bezier-react-section-label-left-content'
export const SECTION_LABEL_TEST_RIGHT_CONTENT_ID = 'bezier-react-section-label-right-content'

function renderLeftContent(content: SectionLabelLeftContent) {
  const isLegacyIcon = isIconName(content)

  if (!isBezierIcon(content) && !isLegacyIcon) {
    return content
  }

  if (isLegacyIcon) {
    warn('Deprecation: IconName as a value for the icon property of SectionLabel has been deprecated. Use the Icon of bezier-icons instead.')
  }

  const Comp = isLegacyIcon ? LegacyIcon : Icon

  return (
    // @ts-expect-error
    <Comp
      {...isLegacyIcon ? {
        name: content,
      } : {
        source: content,
      }}
      size={IconSize.S}
      color="txt-black-dark"
    />
  )
}

function isIconWithAction(args: unknown): args is IconWithAction {
  return isObject(args) && 'icon' in args
}

function renderRightContent(content: SectionLabelRightContent) {
  const isLegacyIcon = isIconName(content)
  const withAction = isIconWithAction(content)

  if (!isBezierIcon(content) && !isLegacyIcon && !withAction) {
    return content
  }

  if (isLegacyIcon) {
    warn('Deprecation: IconName as a value for the icon property of SectionLabel has been deprecated. Use the Icon of bezier-icons instead.')
  }

  return (
    <Button
      {...withAction ? {
        leftContent: content.icon,
        onClick: content.onClick,
      } : {
        as: 'div',
        leftContent: content,
      }}
      className={classNames(
        styles.RightItem,
        withAction && styles.clickable,
      )}
      size={ButtonSize.XS}
      styleVariant={ButtonStyleVariant.Tertiary}
      colorVariant={ButtonColorVariant.MonochromeLight}
    />
  )
}

export const SectionLabel = forwardRef<HTMLElement, SectionLabelProps>(function SectionLabel({
  children,
  className,
  open = true,
  divider = false,
  help,
  leftContent,
  content,
  rightContent,
  testId,
  onClick,
  ...props
}, forwardedRef) {
  const clickable = !isNil(onClick)
  const Comp = clickable ? 'button' : 'div'

  return (
    <>
      <Comp
        {...props}
        // @ts-expect-error
        ref={forwardedRef}
        className={classNames(
          styles.SectionLabel,
          divider && styles.divider,
          clickable && styles.clickable,
          className,
        )}
        data-testid={testId}
        onClick={onClick}
      >
        { leftContent && (
          <div className={styles.LeftContent}>
            { renderLeftContent(leftContent) }
          </div>
        ) }

        <div className={styles.Content}>
          { isString(content) || isNumber(content)
            ? (
              <Text
                bold
                typo="13"
                color="txt-black-dark"
                truncated
              >
                { content }
              </Text>
            )
            : content }
        </div>

        { help && (
          <div className={styles.Help}>
            <Help allowHover>
              { help }
            </Help>
          </div>
        ) }

        { (!isNil(rightContent) && !isEmpty(rightContent)) && (
          <div className={styles.RightContent}>
            { isArray(rightContent)
              ? rightContent.map(renderRightContent)
              : renderRightContent(rightContent) }
          </div>
        ) }
      </Comp>

      { children && open && (
        <div>
          { children }
        </div>
      ) }
    </>
  )
})
