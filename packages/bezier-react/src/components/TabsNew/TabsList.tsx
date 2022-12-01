/* External dependencies */
import React, { useMemo } from 'react'
import * as Tabs from '@radix-ui/react-tabs'

/* Internal dependencies */
import { TabsListProps, TabsSize } from './Tabs.types'
import * as Styled from './TabsList.styled'
import TabsListContext from './TabsListContext'
import { isTabItem } from './TabItem'
import { isTabAction } from './TabAction'

export function TabsList({
  children,
  height = TabsSize.Normal,
}: TabsListProps) {
  const heightContextValue = useMemo(() => ({
    height,
  }), [height])

  return (
    <TabsListContext.Provider value={heightContextValue}>
      <Styled.List height={height}>
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
    </TabsListContext.Provider>
  )
}
