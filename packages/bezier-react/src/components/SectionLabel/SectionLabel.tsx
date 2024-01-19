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

import {
  type IconWithAction,
  type SectionLabelLeftContent,
  type SectionLabelProps,
  type SectionLabelRightContent,
} from './SectionLabel.types'

import styles from './SectionLabel.module.scss'

function LeftContent({ children }: { children: SectionLabelLeftContent }) {
  const isLegacyIcon = isIconName(children)

  if (!isBezierIcon(children) && !isLegacyIcon) {
    return <>{ children }</>
  }

  if (isLegacyIcon) {
    warn('Deprecation: IconName as a value for the icon property of SectionLabel has been deprecated. Use the Icon of bezier-icons instead.')
  }

  const Comp = isLegacyIcon ? LegacyIcon : Icon

  return (
    // @ts-expect-error
    <Comp
      {...isLegacyIcon ? {
        name: children,
      } : {
        source: children,
      }}
      size={IconSize.S}
      color="txt-black-dark"
    />
  )
}

function isIconWithAction(args: unknown): args is IconWithAction {
  return isObject(args) && 'icon' in args
}

function RightContent({ children }: { children: SectionLabelRightContent }) {
  const isLegacyIcon = isIconName(children)
  const withAction = isIconWithAction(children)

  if (!isBezierIcon(children) && !isLegacyIcon && !withAction) {
    return <>{ children }</>
  }

  if (isLegacyIcon) {
    warn('Deprecation: IconName as a value for the icon property of SectionLabel has been deprecated. Use the Icon of bezier-icons instead.')
  }

  return (
    <Button
      {...withAction ? {
        leftContent: children.icon,
        onClick: children.onClick,
      } : {
        as: 'div',
        leftContent: children,
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
  testId = 'bezier-section-label',
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
            <LeftContent>
              { leftContent }
            </LeftContent>
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
              ? rightContent.map((eachContent, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <RightContent key={index}>
                  { eachContent }
                </RightContent>
              ))
              : (
                <RightContent>
                  { rightContent }
                </RightContent>
              ) }
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
