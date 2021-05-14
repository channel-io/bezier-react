/* External dependencies */
import React from 'react'
import base from 'paths.macro'
import { v4 as uuid } from 'uuid'
import { range } from 'lodash-es'

/* Internal dependencies */
import {
  getObjectFromEnum,
  getTitle,
} from '../../utils/storyUtils'
import { TabItem } from '../TabItem'
import { TabAction } from '../TabAction'
import Tabs from './Tabs'
import { TabsSize } from './Tabs.types'

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
}

const Template = ({ tabCount, ...otherProps }) => (
  <Tabs {...otherProps}>
    { range(0, tabCount).map((n) => (
      <TabItem optionKey={`tab-item-${n}`}>
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

/* eslint-disable react/button-has-type */
export const WithAction = ({ onClickTabAction, tabCount, ...otherProps }) => (
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
}
