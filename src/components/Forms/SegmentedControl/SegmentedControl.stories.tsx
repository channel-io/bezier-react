/* eslint-disable storybook/default-exports */
/* External dependencies */
import React from 'react'
import { Story } from '@storybook/react'

/* Internal dependencies */
import { Text } from 'Components/Text'
import SegmentedControl from './SegmentedControl'
import SegmentedControlProps from './SegmentedControl.types'

const PrimaryStory: Story<SegmentedControlProps> = ({ width, height, selectedOptionIndex, ...otherProps }) => (
  <SegmentedControl
    width={width}
    height={height}
    selectedOptionIndex={selectedOptionIndex}
    {...otherProps}
  >
    { ['Open', 'Snoozed', 'Closed'].map((item) => (
      <Text key={item} bold>{ item }</Text>
    )) }
  </SegmentedControl>
)

export const Primary = PrimaryStory.bind({})

Primary.args = {
  disabled: false,
  width: '400px',
  height: '36px',
  selectedOptionIndex: 0,
}
