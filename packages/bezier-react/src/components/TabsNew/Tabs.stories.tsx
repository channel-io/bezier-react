/* External dependencies */
import React from 'react'
import { noop } from 'lodash-es'
import base from 'paths.macro'
import { Story, Meta } from '@storybook/react'

/* Internal dependencies */
import { styled } from 'Foundation'
import { getTitle } from 'Utils/storyUtils'
import { TabActionProps, TabsContentProps, TabsListProps, TabsProps, TabsSize } from './Tabs.types'
import { Tabs } from './Tabs'
import { TabsList } from './TabsList'
import TabItem from './TabItem'
import TabAction from './TabAction'

type TabsCompositionProps =
  & TabsProps
  & TabsListProps
  & TabActionProps
  & TabsContentProps

const Wrapper = styled.div`
  display: flex;
  width: 400px;
`

function TabsComposition({
  onValueChange,
  defaultValue,
  value,
  height,
}: TabsCompositionProps) {
  return (
    <Wrapper>
      <Tabs
        onValueChange={onValueChange}
        value={value}
        defaultValue={defaultValue}
      >
        <TabsList height={height}>
          <TabItem value="One">Tab1</TabItem>
          <TabItem value="Two">Tab2</TabItem>
          <TabItem value="Three">Tab3</TabItem>

          <TabAction href="asdf">
            Sub1
          </TabAction>
          <TabAction>
            Sub2
          </TabAction>
        </TabsList>
        { /* TODO: Implement Tab content component */ }
      </Tabs>
    </Wrapper>
  )
}

export default {
  title: getTitle(base),
  component: TabsComposition,
  argTypes: {
    height: {
      control: {
        type: 'radio',
        options: [TabsSize.XS, TabsSize.Normal, TabsSize.L],
      },
    },
    onValueChange: {
      action: 'clicked',
    },
  },
} as Meta<TabsProps>

const Template: Story<TabsCompositionProps> = TabsComposition

export const Composition: Story<TabsCompositionProps> = Template.bind({})
Composition.args = {
  height: TabsSize.Normal,
  onValueChange: noop,
  defaultValue: undefined,
  value: 'One',
}

export const UnControlled: Story<TabsCompositionProps> = Template.bind({})
UnControlled.args = {
  height: TabsSize.Normal,
  onValueChange: noop,
  defaultValue: 'One',
}
