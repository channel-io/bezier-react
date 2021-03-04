/* External dependencies */
import React, { Ref, forwardRef, useMemo, useCallback } from 'react'
import { get, isNil } from 'lodash-es'

/* Internal dependencies */
import { Text } from '../Text'
import { IconSize } from '../Icon'
import { Typography } from '../../foundation'
import { TabsSize } from '../Tabs/Tabs.types'
import TabActionProps from './TabAction.types'
import { Wrapper, Background, LinkIcon } from './TabAction.styled'

export const TAB_ACTIONS_TEST_ID = 'ch-design-system-tab-action'
export const TAB_ACTIONS_COMPONENT_NAME = 'TabAction'

export function isTabAction(element: any): element is React.ReactElement<TabActionProps> {
  return React.isValidElement(element) &&
    get(element, 'type.displayName') === TAB_ACTIONS_COMPONENT_NAME
}

function TabActionComponent({
  testId = TAB_ACTIONS_TEST_ID,
  disabled = false,
  href,
  height = TabsSize.Normal,
  onClick,
  /* HTMLAttribute props */
  children,
  ...otherProps
}: TabActionProps, forwardedRef: Ref<any>) {
  const backgroundSizeProp = useMemo(() => {
    if (height >= TabsSize.L) {
      return {
        padding: 14,
        borderRadius: 12,
      }
    }
    if (height > TabsSize.XS) {
      return {
        padding: 7,
        borderRadius: 8,
      }
    }
    return {
      padding: 7,
      borderRadius: 6,
    }
  }, [height])

  const textTypo = useMemo(() => {
    if (height >= TabsSize.L) {
      return Typography.Size14
    }
    return Typography.Size13
  }, [height])

  const iconSize = useMemo(() => {
    if (height >= TabsSize.L) {
      return IconSize.S
    }
    return IconSize.XS
  }, [height])

  const handleClick = useCallback((e) => {
    if (onClick?.() === false) {
      e.preventDefault()
    }
  }, [onClick])

  return (
    <Wrapper
      ref={forwardedRef}
      data-testid={testId}
      data-disabled={disabled}
      height={height}
      {...otherProps}
    >
      <Background
        as={isNil(href) ? 'div' : 'a'}
        href={href}
        onClick={handleClick}
        {...backgroundSizeProp}
      >
        <Text bold typo={textTypo}>
          { children }
        </Text>
        { !isNil(href) && (
          <LinkIcon name="open-in-new" size={iconSize} />
        ) }
      </Background>
    </Wrapper>
  )
}

const TabAction = forwardRef(TabActionComponent)
TabAction.displayName = TAB_ACTIONS_COMPONENT_NAME

export default TabAction
