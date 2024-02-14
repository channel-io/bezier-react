import React, { forwardRef } from 'react'

import { isBezierIcon } from '@channel.io/bezier-icons'
import classNames from 'classnames'

import {
  isArray,
  isEmpty,
  isNil,
} from '~/src/utils/type'

import { Button } from '~/src/components/Button'
import {
  Icon,
  IconSize,
} from '~/src/components/Icon'
import {
  Text,
  type TextProps,
} from '~/src/components/Text'
import { Tooltip } from '~/src/components/Tooltip'

import {
  type ItemActionWithIcon,
  type KeyValueItemAction,
  type KeyValueItemProps,
} from './KeyValueItem.types'

import styles from './KeyValueItem.module.scss'

export const KEY_VALUE_ITEM_TEST_ID = 'bezier-key-value-item'
export const KEY_VALUE_ITEM_KEY_ICON_TEST_ID = 'bezier-key-value-item-key-icon'

function KeyItem({
  icon,
  children,
}: {
  icon: KeyValueItemProps['keyIcon']
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
            data-testid={KEY_VALUE_ITEM_KEY_ICON_TEST_ID}
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

function ActionButton({ children }: { children: KeyValueItemAction }) {
  if (!isItemActionWithIcon(children)) {
    return children
  }

  const Wrapper = !isEmpty(children.tooltip) ? Tooltip : React.Fragment

  return (
    <Wrapper content={children.tooltip}>
      <Button
        size="xs"
        leftContent={children.icon}
        styleVariant="tertiary"
        colorVariant="monochrome-light"
        onClick={children.onClick}
      />
    </Wrapper>
  )
}

function ActionButtonGroup({ children }: { children: KeyValueItemProps['actions'] }) {
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

export const KeyValueItem = forwardRef<HTMLDivElement, KeyValueItemProps>(function KeyValueListItem({
  className,
  keyIcon,
  keyContent,
  actions,
  children,
  onClickKey,
  onClickValue,
  ...rest
}, forwardedRef) {
  return (
    <div
      className={classNames(
        styles.KeyValueItem,
        styles.singleline,
        className,
      )}
      ref={forwardedRef}
      data-testid={KEY_VALUE_ITEM_TEST_ID}
      {...rest}
    >
      { /* Since it allows for click interaction, it should be interactive content,
        but since it has a button element nested inside it, this is bad HTML markup.
        It's difficult to fix this without changing the design,
        so we keep the legacy code that uses the div element. */ }
      { /* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */ }
      <div
        className={classNames(
          styles.ItemWrapper,
          styles.KeyItemWrapper,
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
          styles.ItemWrapper,
          styles.ValueItemWrapper,
          onClickValue && styles.clickable,
        )}
        onClick={onClickValue}
      >
        <ValueItem truncated>
          { children }
        </ValueItem>

        <ActionButtonGroup>
          { actions }
        </ActionButtonGroup>
      </div>
    </div>
  )
})

export const KeyValueMultiLineItem = forwardRef<HTMLDivElement, KeyValueItemProps>(function KeyValueMultiLineListItem({
  children,
  className,
  keyIcon,
  keyContent,
  actions,
  onClickKey,
  onClickValue,
  ...rest
}, forwardedRef) {
  return (
    <div
      className={classNames(
        styles.KeyValueItem,
        styles.multiline,
        className,
      )}
      ref={forwardedRef}
      data-testid={KEY_VALUE_ITEM_TEST_ID}
      {...rest}
    >
      { /* Since it allows for click interaction, it should be interactive content,
        but since it has a button element nested inside it, this is bad HTML markup.
        It's difficult to fix this without changing the design,
        so we keep the legacy code that uses the div element. */ }
      { /* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */ }
      <div
        className={classNames(
          styles.ItemWrapper,
          styles.KeyItemWrapper,
          onClickKey && styles.clickable,
        )}
        onClick={onClickKey}
      >
        <KeyItem icon={keyIcon}>
          { keyContent }
        </KeyItem>

        <ActionButtonGroup>
          { actions }
        </ActionButtonGroup>
      </div>

      { /* Since it allows for click interaction, it should be interactive content,
        but since it has a button element nested inside it, this is bad HTML markup.
        It's difficult to fix this without changing the design,
        so we keep the legacy code that uses the div element. */ }
      { /* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */ }
      <div
        className={classNames(
          styles.ItemWrapper,
          styles.ValueItemWrapper,
          onClickValue && styles.clickable,
        )}
        onClick={onClickValue}
      >
        <ValueItem>
          { children }
        </ValueItem>
      </div>
    </div>
  )
})
