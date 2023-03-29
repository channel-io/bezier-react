/* eslint-disable no-alert */
/* External dependencies */
import React, {
  useCallback,
  useState,
} from 'react'
import base from 'paths.macro'
import {
  type Story,
  type Meta,
} from '@storybook/react'

/* Internal dependencies */
import { styled } from '~/src/foundation'
import { getTitle } from '~/src/utils/storyUtils'
import { isFunction } from '~/src/utils/typeUtils'
import { noop } from '~/src/utils/functionUtils'
import { Text } from '~/src/components/Text'
import {
  type TabActionProps,
  type TabListProps,
  type TabsProps,
  TabSize,
} from './Tabs.types'
import { Tabs } from './Tabs'
import { TabList } from './TabList'
import { TabItem } from './TabItem'
import { TabContent } from './TabContent'
import { TabItems } from './TabItems'
import { TabActions } from './TabActions'
import { TabAction } from './TabAction'

type TabsCompositionProps =
  & TabsProps
  & TabListProps
  & TabActionProps<string | undefined>

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

export default {
  title: getTitle(base),
  component: TabsComposition,
  subcomponents: {
    Tabs,
    TabItems,
    TabItem,
    TabActions,
    TabAction,
    TabContent,
  },
  argTypes: {
    size: {
      control: {
        type: 'radio',
        options: [TabSize.S, TabSize.M, TabSize.L],
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
  size: TabSize.M,
  onValueChange: noop,
  defaultValue: undefined,
  activationMode: 'automatic',
  value: 'One',
}

export const UnControlled: Story<TabsCompositionProps> = Template.bind({})
UnControlled.args = {
  size: TabSize.M,
  onValueChange: noop,
  defaultValue: 'One',
  activationMode: 'automatic',
}
