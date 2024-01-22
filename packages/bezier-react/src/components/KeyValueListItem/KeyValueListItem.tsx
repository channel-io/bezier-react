import React, {
  type Ref,
  forwardRef,
} from 'react'

import { isBezierIcon } from '@channel.io/bezier-icons'
import classNames from 'classnames'

import {
  isArray,
  isEmpty,
  isNil,
} from '~/src/utils/type'

import {
  Button,
  ButtonColorVariant,
  ButtonSize,
  ButtonStyleVariant,
} from '~/src/components/Button'
import {
  Icon,
  IconSize,
} from '~/src/components/Icon'
import { TEST_ID_MAP } from '~/src/components/KeyValueListItem/KeyValueListItem.const'
import {
  Text,
  type TextProps,
} from '~/src/components/Text'
import { Tooltip } from '~/src/components/Tooltip'

import {
  type ItemActionWithIcon,
  type KeyValueListItemAction,
  type KeyValueListItemProps,
} from './KeyValueListItem.types'

import styles from './KeyValueListItem.module.scss'

function KeyItem({
  icon,
  children,
}: {
  icon: KeyValueListItemProps['keyIcon']
  children: React.ReactNode
}) {
  return (
    <div className={styles.KeyItem}>
      { isBezierIcon(icon)
        ? (
          <Icon
            size={IconSize.S}
            source={icon}
            color="txt-black-dark"
          />
        )
        : icon }

      <Text
        className={styles.KeyText}
        bold
        typo="12"
        color="txt-black-dark"
        truncated
      >
        { children }
      </Text>
    </div>
  )
}

function ValueItem({
  truncated,
  children,
}: TextProps) {
  return (
    <Text
      className={styles.ValueItem}
      typo="14"
      truncated={truncated}
    >
      { children }
    </Text>
  )
}

function isItemActionWithIcon(args: object): args is ItemActionWithIcon {
  return 'icon' in args
}

function ActionButton({ children }: { children: KeyValueListItemAction }) {
  if (!isItemActionWithIcon(children)) {
    return children
  }

  const Wrapper = !isEmpty(children.tooltip) ? Tooltip : React.Fragment

  return (
    <Wrapper content={children.tooltip}>
      <Button
        size={ButtonSize.XS}
        leftContent={children.icon}
        styleVariant={ButtonStyleVariant.Tertiary}
        colorVariant={ButtonColorVariant.MonochromeLight}
        onClick={children.onClick}
      />
    </Wrapper>
  )
}

function ActionButtonGroup({ children }: { children: KeyValueListItemProps['actions'] }) {
  if (isNil(children) || isEmpty(children)) {
    return null
  }

  return (
    <div className={styles.ItemAction}>
      { isArray(children)
        ? children.map((action, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <ActionButton key={index}>
            { action }
          </ActionButton>
        ))
        : (
          <ActionButton>
            { children }
          </ActionButton>
        ) }
    </div>
  )
}

function KeyValueListItem(
  {
    className,
    keyIcon,
    keyContent,
    actions,
    children,
    testId = TEST_ID_MAP.ROOT,
    onClickKey,
    onClickValue,
    ...props
  }: KeyValueListItemProps,
  forwardedRef: Ref<HTMLDivElement>,
) {
  return (
    <div
      {...props}
      className={classNames(
        styles.KeyValueItemWrapper,
        styles.KeyValueSingleLineItem,
        className,
      )}
      ref={forwardedRef}
      data-testid={testId}
    >
      { /* Since it allows for click interaction, it should be interactive content,
        but since it has a button element nested inside it, this is bad HTML markup.
        It's difficult to fix this without changing the design,
        so we keep the legacy code that uses the div element. */ }
      { /* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */ }
      <div
        className={classNames(
          styles.KeyValueItemInnerWrapper,
          styles.KeySingleLineItem,
          onClickKey && styles.clickable,
        )}
        onClick={onClickKey}
      >
        <KeyItem icon={keyIcon}>
          { keyContent }
        </KeyItem>
      </div>

      { /* Since it allows for click interaction, it should be interactive content,
        but since it has a button element nested inside it, this is bad HTML markup.
        It's difficult to fix this without changing the design,
        so we keep the legacy code that uses the div element. */ }
      { /* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */ }
      <div
        className={classNames(
          styles.KeyValueItemInnerWrapper,
          styles.ValueSingleLineItem,
          onClickValue && styles.clickable,
        )}
        onClick={onClickValue}
      >
        <ValueItem>
          { children }
        </ValueItem>

        <ActionButtonGroup>
          { actions }
        </ActionButtonGroup>
      </div>
    </div>
  )
}

export default forwardRef(KeyValueListItem)
