/* External dependencies */
import React, { Ref, forwardRef, useMemo, useCallback, useState } from 'react'
import { get, noop } from 'lodash-es'

/* Internal dependencies */
import { Typography } from 'Foundation'
import { mergeClassNames } from 'Utils/stringUtils'
import { Text } from 'Components/Text'
import TabsSize from 'Components/Tabs/TabsSize'
import TabItemProps from './TabItem.types'
import { Wrapper, Background } from './TabItem.styled'

const TAB_ITEM_COMPONENT_NAME = 'TabItem'
export const TAB_ITEM_TEST_ID = 'bezier-react-tab-item'

export function isTabItem(element: any): element is React.ReactElement<TabItemProps> {
  return React.isValidElement(element) &&
    get(element, 'type.displayName') === TAB_ITEM_COMPONENT_NAME
}

function TabItemComponent({
  as,
  testId = TAB_ITEM_TEST_ID,
  disabled = false,
  height = 45,
  withIndicator = true,
  /* ActivatableElement props */
  activeClassName,
  active,
  /* OptionItem props */
  optionKey,
  /* HTMLAttribute props */
  className,
  children,
  onClick = noop,
  ...otherProps
}: TabItemProps, forwardedRef: Ref<any>) {
  const [isHovered, setIsHovered] = useState(false)

  const clazzName = useMemo(() => (
    mergeClassNames(className, ((active && activeClassName) || undefined))
  ), [
    className,
    activeClassName,
    active,
  ])

  const backgroundSizeProp = useMemo(() => {
    if (height >= TabsSize.L) {
      return {
        padding: 14,
        borderRadius: 12,
      }
    }
    if (height > TabsSize.XS) {
      return {
        padding: 14,
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
      return Typography.Size16
    }
    if (height > TabsSize.XS) {
      return Typography.Size14
    }
    return Typography.Size13
  }, [height])

  const handleClick = useCallback((e) => {
    if (!active && !disabled) {
      onClick(e)
    }
  }, [
    active,
    disabled,
    onClick,
  ])

  const handleMouseEnter = useCallback(() => setIsHovered(true), [])

  const handleMouseLeave = useCallback(() => setIsHovered(false), [])

  return (
    <Wrapper
      ref={forwardedRef}
      as={as}
      className={clazzName}
      height={height}
      active={active}
      disabled={disabled}
      withIndicator={withIndicator}
      data-option-key={optionKey}
      data-testid={testId}
      data-disabled={disabled}
      data-active={active || undefined}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...otherProps}
    >
      <Background
        isHovered={isHovered}
        disabled={disabled}
        {...backgroundSizeProp}
      >
        <Text bold typo={textTypo}>
          { children }
        </Text>
      </Background>
    </Wrapper>
  )
}

const TabItem = forwardRef(TabItemComponent)
TabItem.displayName = TAB_ITEM_COMPONENT_NAME

export default TabItem
