/* eslint-disable no-alert */

import { useCallback, useState } from 'react'

import { type Meta, type StoryFn, type StoryObj } from '@storybook/react'

import { noop } from '~/src/utils/function'
import { isFunction } from '~/src/utils/type'

import { Center } from '~/src/components/Center'
import { Text } from '~/src/components/Text'

import {
  TabAction,
  TabActions,
  TabContent,
  TabItem,
  TabItems,
  TabList,
  Tabs,
} from './Tabs'
import {
  type TabActionProps,
  type TabListProps,
  type TabsProps,
} from './Tabs.types'

type TabsCompositionProps = TabsProps &
  TabListProps &
  TabActionProps<string | undefined>

function TabsComposition({
  activationMode,
  defaultValue,
  value,
  size,
  onValueChange,
}: TabsCompositionProps) {
  const [currentValue, setCurrentValue] = useState(value ?? defaultValue)

  const handleValueChange = useCallback(
    (_value: typeof value) => {
      setCurrentValue(_value)
      if (isFunction(onValueChange)) {
        onValueChange(_value as string)
      }
    },
    [onValueChange]
  )

  return (
    <div
      style={{
        display: 'flex',
        width: 400,
        height: 200,
      }}
    >
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
            <TabItem
              value="Three"
              maxWidth={50}
            >
              LongLongLabelTab
            </TabItem>
          </TabItems>

          <TabActions>
            <TabAction href="https://github.com/channel-io/bezier-react">
              Sub1
            </TabAction>
            <TabAction
              onClick={() => {
                window.alert('Hi!')
              }}
            >
              Sub2
            </TabAction>
          </TabActions>
        </TabList>

        <TabContent value="One">
          <Center height={100}>
            <Text color="txt-black-darkest">Tab1 content</Text>
          </Center>
        </TabContent>
        <TabContent value="Two">
          <Center height={100}>
            <Text color="txt-black-darkest">Tab2 content</Text>
          </Center>
        </TabContent>
        <TabContent value="Three">
          <Center height={100}>
            <Text color="txt-black-darkest">LongLongLabelTab content</Text>
          </Center>
        </TabContent>
      </Tabs>
    </div>
  )
}

const meta: Meta<TabsCompositionProps> = {
  component: TabsComposition,
  argTypes: {
    size: {
      control: {
        type: 'radio',
      },
      options: ['s', 'm', 'l'],
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
    size: 'm',
    onValueChange: noop,
    defaultValue: undefined,
    activationMode: 'automatic',
    value: 'One',
  },
}

export const UnControlled: StoryObj<TabsCompositionProps> = {
  render: Template,

  args: {
    size: 'm',
    onValueChange: noop,
    defaultValue: 'One',
    activationMode: 'automatic',
  },
}
