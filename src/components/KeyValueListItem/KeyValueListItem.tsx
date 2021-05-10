/* External dependencies */
import React, { forwardRef, Ref, useCallback, useMemo } from 'react'
import _ from 'lodash'
import { v4 as uuid } from 'uuid'

/* Internal dependencies */
import { Icon, IconSize } from '../Icon'
import { Typography } from '../../foundation'
import { isIconName } from '../Icon/util'
import { KeyValueActionProps, KeyValueListItemProps } from './KeyValueListItem.types'
import Styled from './KeyValueListItem.styled'

export const KEY_VALUE_LIST_ITEM_TEST_ID = 'ch-design-system-key-value-list-item'

function KeyValueListItem(
  {
    className,
    interpolation,
    valueWrapperInterpolation,
    keyWrapperInterpolation,
    keyIcon,
    keyContent,
    actions,
    multiline = false,
    testId = KEY_VALUE_LIST_ITEM_TEST_ID,
    children,
    ...props
  }: KeyValueListItemProps,
  forwardedRef: Ref<any>,
) {
  const renderAction = useCallback((action: KeyValueActionProps, key?: string) => {
    if ('icon' in action) {
      const iconElement = (
        <Styled.ActionIconWrapper
          key={key}
          hoverBackgroundColor={action.hoverBackgroundColor ?? 'bg-black-lighter'}
          hoverIconColor={action.hoverIconColor ?? 'txt-black-darkest'}
          show={_.isBoolean(action.show) ? action.show : true}
          onClick={action.onClick ?? _.noop}
        >
          <Styled.ActionIcon
            name={action.icon}
            color={action.iconColor ?? 'txt-black-dark'}
            size={IconSize.XS}
          />
        </Styled.ActionIconWrapper>
      )

      if (!_.isEmpty(action.tooltip)) {
        return (
          <Styled.ActionIconTooltip
            content={action.tooltip}
          >
            { iconElement }
          </Styled.ActionIconTooltip>
        )
      }

      return iconElement
    }

    return (
      React.cloneElement(
        action,
        { key },
      )
    )
  }, [])

  const KeyIconComponent = useMemo(() => {
    if (isIconName(keyIcon)) {
      return (
        <Icon
          name={keyIcon}
          size={IconSize.S}
          color="txt-black-dark"
        />
      )
    }

    return keyIcon
  }, [keyIcon])

  const ActionsComponent = useMemo(() => {
    if (_.isNil(actions) || _.isEmpty(actions)) {
      return null
    }

    const item = _.isArray(actions)
      ? actions.map((action) => renderAction(action, uuid()))
      : renderAction(actions)

    return item
  }, [
    actions,
    renderAction,
  ])

  const ValueComonent = useMemo(() => (
    <Styled.ValueWrapper
      interpolation={valueWrapperInterpolation}
    >
      { children }
    </Styled.ValueWrapper>
  ), [
    children,
    valueWrapperInterpolation,
  ])

  const MultilineValueComponent = useMemo(() => {
    if (!multiline) {
      return null
    }

    return (
      <Styled.ValueWrapper>
        { children }
      </Styled.ValueWrapper>
    )
  }, [
    children,
    multiline,
  ])

  return (
    <Styled.Wrapper
      ref={forwardedRef}
      interpolation={interpolation}
      className={className}
      data-testid={testId}
      // eslint-disable-next-line react/jsx-props-no-multi-spaces
      {...props}
    >
      <Styled.Row>
        { KeyIconComponent }
        <Styled.KeyContentWrapper
          interpolation={keyWrapperInterpolation}
        >
          <Styled.KeyText bold typo={Typography.Size12}>
            { keyContent }
          </Styled.KeyText>
        </Styled.KeyContentWrapper>

        { !multiline && ValueComonent }

        { ActionsComponent }
      </Styled.Row>

      { multiline && (
        <Styled.Row>
          { MultilineValueComponent }
        </Styled.Row>
      ) }
    </Styled.Wrapper>
  )
}

export default forwardRef(KeyValueListItem)
