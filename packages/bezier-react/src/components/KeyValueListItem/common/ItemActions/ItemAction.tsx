import React, {
  type Ref,
  forwardRef,
  memo,
} from 'react'

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
import { TEST_ID_MAP } from '~/src/components/KeyValueListItem/KeyValueListItem.const'
import { Tooltip } from '~/src/components/Tooltip'

import styles from '../../KeyValueListItem.module.scss'

import {
  type ItemActionProps,
  type ItemActionWithIcon,
  type KeyValueListItemActionProps,
} from './ItemAction.types'

function isItemActionWithIcon(args: object): args is ItemActionWithIcon {
  return 'icon' in args
}

function ActionButton({ children }: { children: KeyValueListItemActionProps }) {
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

function ItemAction(
  {
    actions,
    testId = TEST_ID_MAP.ACTIONS_ITEM,
    ...props
  }: ItemActionProps,
  forwardedRef: Ref<HTMLDivElement>,
) {
  if (isNil(actions) || isEmpty(actions)) {
    return null
  }

  return (
    <div
      {...props}
      className={styles.ItemAction}
      ref={forwardedRef}
      data-testid={testId}
    >
      { isArray(actions)
        ? actions.map((action, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <ActionButton key={index}>
            { action }
          </ActionButton>
        ))
        : (
          <ActionButton>
            { actions }
          </ActionButton>
        ) }
    </div>
  )
}

export default memo(forwardRef(ItemAction))
