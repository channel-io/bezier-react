/* External dependencies */
import React, { Ref, forwardRef, useMemo } from 'react'
import _ from 'lodash'

/* Internal dependencies */
import TabActionsProps from './TabActions.types'
import { Wrapper } from './TabActions.styled'

export const TAB_ACTIONS_TEST_ID = 'ch-design-system-tab-actions'
export const TAB_ACTIONS_COMPONENT_NAME = 'TabActions'

export function isTabActions(element: any): element is React.ReactElement<TabActionsProps> {
  return React.isValidElement(element) &&
    _.get(element, 'type.displayName') === TAB_ACTIONS_COMPONENT_NAME
}

function TabActionsComponent({
  testId = TAB_ACTIONS_TEST_ID,
  disabled = false,
  /* HTMLAttribute props */
  children,
  ...otherProps
}: TabActionsProps, forwardedRef: Ref<any>) {
  const Content = useMemo(() => (
    _.map(children, (child) => {
      if (React.isValidElement(child)) {
        // @ts-ignore
        return React.cloneElement(child, { disabled })
      }
      if (_.isFunction(child)) {
        return child({ disabled })
      }
      return undefined
    })
  ), [disabled, children])

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
