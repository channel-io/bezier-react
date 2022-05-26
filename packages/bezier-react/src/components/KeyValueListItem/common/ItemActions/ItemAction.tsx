/* External dependencies */
import React, { forwardRef, memo, Ref, useCallback, useMemo } from 'react'
import { noop, isNil, isEmpty, isArray, isBoolean } from 'lodash-es'
import { v4 as uuid } from 'uuid'

/* Internal dependencies */
import { IconSize } from 'Components/Icon'
import { TEST_ID_MAP } from 'Components/KeyValueListItem/KeyValueListItem.const'
import { ItemActionProps, KeyValueListItemActionProps } from './ItemAction.types'
import * as Styled from './ItemAction.styled'

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
          <Styled.ActionIcon
            name={action.icon}
            color={action.iconColor ?? 'txt-black-dark'}
            size={IconSize.XS}
          />
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
