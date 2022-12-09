/* External dependencies */
import React, { useMemo } from 'react'
import * as Tabs from '@radix-ui/react-tabs'

/* Internal dependencies */
import { TabListProps, TabSize } from './Tabs.types'
import * as Styled from './TabList.styled'
import TabListContext from './TabListContext'
import { isTabItem } from './TabItem'
import { isTabAction } from './TabAction'

export function TabList({
  children,
  size = TabSize.Normal,
  ...rest
}: TabListProps) {
  const heightContextValue = useMemo(() => ({
    size,
  }), [size])

  return (
    <TabListContext.Provider value={heightContextValue}>
      <Styled.List
        size={size}
        {...rest}
      >
        <Tabs.List asChild>
          <Styled.TriggerWrapper>
            { React.Children.map(children, child => {
              if (isTabItem(child)) {
                return (
                  <Tabs.Trigger
                    value={child.props.value}
                    disabled={child.props.disabled}
                    asChild
                  >
                    { child }
                  </Tabs.Trigger>
                )
              }
              return null
            }) }
          </Styled.TriggerWrapper>
        </Tabs.List>

        <Styled.TabActionWrapper>
          { React.Children.map(children, child => {
            if (isTabAction(child)) {
              return child
            }
            return null
          }) }
        </Styled.TabActionWrapper>
      </Styled.List>
    </TabListContext.Provider>
  )
}
