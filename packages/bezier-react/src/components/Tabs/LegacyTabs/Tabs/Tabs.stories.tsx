/* External dependencies */
import React from 'react'
import base from 'paths.macro'
import { v4 as uuid } from 'uuid'
import { range, noop } from 'lodash-es'
import { Story, Meta } from '@storybook/react'

/* Internal dependencies */
import { getObjectFromEnum, getTitle } from 'Utils/storyUtils'
import { TabItem } from 'Components/Tabs/LegacyTabs/TabItem'
import { TabAction } from 'Components/Tabs/LegacyTabs/TabAction'
import TabsSize from 'Components/Tabs/LegacyTabs/TabsSize'
import Tabs from './Tabs'
import TabsProps from './Tabs.types'

export default {
  title: getTitle(base),
  component: Tabs,
  argTypes: {
    onClick: { action: 'clicked' },
    onClickTabAction: { action: 'clicked' },
    selectedOptionIndex: {
      control: {
        type: 'number',
      },
    },
    indicatorThickness: {
      control: {
        type: 'number',
      },
    },
    height: {
      control: {
        type: 'radio',
        options: getObjectFromEnum(TabsSize),
      },
    },
    tabCount: {
      control: {
        type: 'number',
      },
    },
  },
} as Meta

interface TabCount {
  tabCount: number
}

const Template: Story<TabsProps & TabCount> = ({ tabCount, ...otherProps }) => (
  <Tabs {...otherProps}>
    { range(0, tabCount).map((n) => (
      <TabItem key={n} optionKey={`tab-item-${n}`}>
        Tab { n }
      </TabItem>
    )) }
  </Tabs>
)

export const Primary = Template.bind({})

Primary.args = {
  disabled: false,
  withIndicator: true,
  indicatorThickness: 3,
  height: TabsSize.Normal,
  tabCount: 8,
}

interface TabActionHandler {
  onClickTabAction: React.MouseEventHandler
}

export const WithAction: Story<TabsProps & TabCount & TabActionHandler> = ({ onClickTabAction, tabCount, ...otherProps }) => (
  <Tabs {...otherProps} style={{ width: '768px' }}>
    { range(0, tabCount).map((n) => (
      <TabItem
        key={uuid()}
        optionKey={`tab-item-${n}`}
      >
        Tab { n }
      </TabItem>
    )) }

    <TabAction href="https://channel.io" onClick={onClickTabAction}>Sub 1</TabAction>
    <TabAction onClick={onClickTabAction}>Sub 2</TabAction>
  </Tabs>
)

WithAction.args = {
  disabled: false,
  withIndicator: true,
  indicatorThickness: 3,
  height: TabsSize.Normal,
  tabCount: 8,
  onClickTabAction: noop,
}
