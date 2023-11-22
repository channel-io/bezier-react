/* eslint-disable no-alert */

import React, {
  useCallback,
  useState,
} from 'react'

import {
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/react'

import { styled } from '~/src/foundation'

import { noop } from '~/src/utils/function'
import { isFunction } from '~/src/utils/type'

import { Text } from '~/src/components/Text'

import { TabAction } from './TabAction'
import { TabActions } from './TabActions'
import { TabContent } from './TabContent'
import { TabItem } from './TabItem'
import { TabItems } from './TabItems'
import { TabList } from './TabList'
import { Tabs } from './Tabs'
import {
  type TabActionProps,
  type TabListProps,
  TabSize,
  type TabsProps,
} from './Tabs.types'

type TabsCompositionProps = TabsProps &
TabListProps &
TabActionProps<string | undefined>

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
  activationMode,
  defaultValue,
  value,
  size,
  onValueChange,
}: TabsCompositionProps) {
  const [currentValue, setCurrentValue] = useState(value ?? defaultValue)

  const handleValueChange = useCallback((_value) => {
    setCurrentValue(_value)
    if (isFunction(onValueChange)) {
      onValueChange(_value)
    }
  }, [onValueChange])

  return (
    <Wrapper>
      <Tabs
        activationMode={activationMode}
        onValueChange={handleValueChange}
        value={currentValue}
        defaultValue={defaultValue}
      >
        <TabList size={size}>
          <TabItems>
            <TabItem value="One">Tab1</TabItem>
            <TabItem value="Two">Tab2</TabItem>
            <TabItem value="Three">Tab3</TabItem>
          </TabItems>

          <TabActions>
            <TabAction href="https://github.com/channel-io/bezier-react">
              Sub1
            </TabAction>
            <TabAction onClick={() => { window.alert('Hi!') }}>
              Sub2
            </TabAction>
          </TabActions>
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

const meta: Meta<TabsCompositionProps> = {
  component: TabsComposition,
  argTypes: {
    size: {
      control: {
        type: 'radio',
      },
      options: [TabSize.S, TabSize.M, TabSize.L],
    },
    onValueChange: {
      action: 'clicked',
    },
  },
}
export default meta

const Template: StoryFn<TabsCompositionProps> = TabsComposition

export const Composition: StoryObj<TabsCompositionProps> = {
  render: Template,

  args: {
    size: TabSize.M,
    onValueChange: noop,
    defaultValue: undefined,
    activationMode: 'automatic',
    value: 'One',
  },
}

export const UnControlled: StoryObj<TabsCompositionProps> = {
  render: Template,

  args: {
    size: TabSize.M,
    onValueChange: noop,
    defaultValue: 'One',
    activationMode: 'automatic',
  },
}
