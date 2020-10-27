/* External dependencies */
import React, { Ref, forwardRef, useMemo } from 'react'
import { v4 as uuid } from 'uuid'
import { get, isArray, map, isFunction, identity } from 'lodash-es'

/* Internal dependencies */
import TabActionsProps from './TabActions.types'
import { Wrapper } from './TabActions.styled'

export const TAB_ACTIONS_TEST_ID = 'ch-design-system-tab-actions'
export const TAB_ACTIONS_COMPONENT_NAME = 'TabActions'

export function isTabActions(element: any): element is React.ReactElement<TabActionsProps> {
  return React.isValidElement(element) &&
    get(element, 'type.displayName') === TAB_ACTIONS_COMPONENT_NAME
}

function TabActionsComponent({
  testId = TAB_ACTIONS_TEST_ID,
  disabled = false,
  /* HTMLAttribute props */
  children,
  ...otherProps
}: TabActionsProps, forwardedRef: Ref<any>) {
  const Content = useMemo(() => {
    if (isArray(children)) {
      return map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { key: child.key || uuid(), disabled })
        }
        if (isFunction(child)) {
          const functionChild = child as Function
          return React.cloneElement(functionChild({}), { key: uuid(), disabled })
        }
        return undefined
      }).filter(identity)
    }
    if (isFunction(children)) {
      const functionChild = children as Function
      return functionChild({ disabled })
    }
    return children
  }, [disabled, children])

  return (
    <Wrapper
      ref={forwardedRef}
      data-testid={testId}
      data-disabled={disabled}
      {...otherProps}
    >
      { Content }
    </Wrapper>
  )
}

const TabActions = forwardRef(TabActionsComponent)
TabActions.displayName = TAB_ACTIONS_COMPONENT_NAME

export default TabActions
