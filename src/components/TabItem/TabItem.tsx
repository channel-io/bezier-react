/* External dependencies */
import React, { Ref, forwardRef, useMemo, useCallback } from 'react'
import _ from 'lodash'

/* Internal dependencies */
import { mergeClassNames } from '../../utils'
import TabItemProps from './TabItem.types'
import { Wrapper } from './TabItem.styled'

export const TAB_ITEM_COMPONENT_NAME = 'TabItem'
export const TAB_ITEM_TEST_ID = 'ch-design-system-tab-item'

export function isTabItem(element: any): element is React.ReactElement<TabItemProps> {
  return React.isValidElement(element) &&
    _.get(element, 'type.displayName') === TAB_ITEM_COMPONENT_NAME
}

function TabItemComponent({
  as,
  testId = TAB_ITEM_TEST_ID,
  disabled = false,
  useIndicator = true,
  /* ActivatableElement props */
  activeClassName,
  active,
  /* OptionItem props */
  optionKey,
  /* HTMLAttribute props */
  className,
  children,
  onClick = _.noop,
  ...otherProps
}: TabItemProps, forwardedRef: Ref<any>) {
  const _className = useMemo(() => (
    mergeClassNames(className, ((active && activeClassName) || undefined))
  ), [
    className,
    activeClassName,
    active,
  ])

  const handleClick = useCallback((e) => {
    if (!active && !disabled) {
      onClick(e)
    }
  }, [active, disabled, onClick])

  return (
    <Wrapper
      ref={forwardedRef}
      as={as}
      className={_className}
      active={active}
      disabled={disabled}
      useIndicator={useIndicator}
      data-option-key={optionKey}
      data-testid={testId}
      data-disabled={disabled}
      data-active={active || undefined}
      onClick={handleClick}
      {...otherProps}
    >
      { children }
    </Wrapper>
  )
}

const TabItem = forwardRef(TabItemComponent)
TabItem.displayName = TAB_ITEM_COMPONENT_NAME

export default TabItem
