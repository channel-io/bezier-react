/* External dependencies */
import React from 'react'
import { noop } from 'lodash-es'
import base from 'paths.macro'
import { Story, Meta } from '@storybook/react'

/* Internal dependencies */
import { styled } from 'Foundation'
import { getTitle } from 'Utils/storyUtils'
import { Text } from 'Components/Text'
import { TabActionProps, TabListProps, TabsProps, TabSize } from './Tabs.types'
import { Tabs } from './Tabs'
import { TabList } from './TabList'
import TabItem from './TabItem'
import TabAction from './TabAction'
import { TabContent } from './TabContent'

type TabsCompositionProps =
  & TabsProps
  & TabListProps
  & TabActionProps

const Wrapper = styled.div`
  display: flex;
  width: 400px;
  height: 200px;
`

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  font-size: 2rem;
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
        <TabList height={height}>
          <TabItem value="One">Tab1</TabItem>
          <TabItem value="Two">Tab2</TabItem>
          <TabItem value="Three">Tab3</TabItem>

          <TabAction href="https://github.com/channel-io/bezier-react">
            Sub1
          </TabAction>
          <TabAction>
            Sub2
          </TabAction>
        </TabList>

        <TabContent value="One">
          <Content>
            <Text>
              Tab1 content
            </Text>
          </Content>
        </TabContent>
        <TabContent value="Two">
          <Content>
            <Text>
              Tab2 content
            </Text>
          </Content>
        </TabContent>
        <TabContent value="Three">
          <Content>
            <Text>
              Tab3 content
            </Text>
          </Content>
        </TabContent>
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
        options: [TabSize.XS, TabSize.Normal, TabSize.L],
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
  height: TabSize.Normal,
  onValueChange: noop,
  defaultValue: undefined,
  value: 'One',
}

export const UnControlled: Story<TabsCompositionProps> = Template.bind({})
UnControlled.args = {
  height: TabSize.Normal,
  onValueChange: noop,
  defaultValue: 'One',
}
