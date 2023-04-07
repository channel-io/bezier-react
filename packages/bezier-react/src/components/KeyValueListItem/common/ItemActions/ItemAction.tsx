import React, {
  forwardRef,
  memo,
  type Ref,
  useCallback,
  useMemo,
} from 'react'

import { v4 as uuid } from 'uuid'

import { noop } from '~/src/utils/functionUtils'
import {
  isArray,
  isBoolean,
  isEmpty,
  isNil,
} from '~/src/utils/typeUtils'

import {
  IconSize,
  isIconName,
} from '~/src/components/Icon'
import { TEST_ID_MAP } from '~/src/components/KeyValueListItem/KeyValueListItem.const'

import {
  type ItemActionProps,
  type ItemActionWithIcon,
  type KeyValueListItemActionProps,
} from './ItemAction.types'

import * as Styled from './ItemAction.styled'

function ActionIcon({
  icon,
  iconColor,
}: ItemActionWithIcon) {
  if (isIconName(icon)) {
    return (
      <Styled.ActionLegacyIcon
        name={icon}
        color={iconColor ?? 'txt-black-dark'}
        size={IconSize.XS}
      />
    )
  }

  return (
    <Styled.ActionIcon
      source={icon}
      color={iconColor ?? 'txt-black-dark'}
      size={IconSize.XS}
    />
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
  const renderAction = useCallback((action: KeyValueListItemActionProps, key?: string) => {
    if ('icon' in action) {
      const iconElement = (
        <Styled.ActionIconWrapper
          key={key}
          hoverBackgroundColor={action.hoverBackgroundColor ?? 'bg-black-lighter'}
          hoverIconColor={action.hoverIconColor ?? 'txt-black-darkest'}
          show={isBoolean(action.show) ? action.show : true}
          onClick={action.onClick ?? noop}
        >
          <ActionIcon {...action} />
        </Styled.ActionIconWrapper>
      )

      if (!isEmpty(action.tooltip)) {
        return (
          <Styled.ActionIconTooltip key={key} content={action.tooltip}>
            { iconElement }
          </Styled.ActionIconTooltip>
        )
      }
      return iconElement
    }

    return React.cloneElement(action, { key })
  }, [])

  const ActionsComponent = useMemo(() => {
    if (isNil(actions) || isEmpty(actions)) {
      return null
    }

    const item = isArray(actions)
      ? actions.map((action) => renderAction(action, uuid()))
      : renderAction(actions)

    return item
  }, [
    actions,
    renderAction,
  ])

  if (isNil(actions) || isEmpty(actions)) {
    return null
  }

  return (
    <Styled.ItemActionWrapper
      data-testid={testId}
      {...props}
      ref={forwardedRef}
    >
      { ActionsComponent }
    </Styled.ItemActionWrapper>
  )
}

export default memo(forwardRef(ItemAction))
