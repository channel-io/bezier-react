/* External dependencies */
import React from 'react'
import { range } from 'lodash-es'

/* Internal dependencies */
import ResizeObserver from '../../__mocks__/ResizeObserver'
import { render } from '../../utils/testUtils'
import { Text } from '../Text'
import SegmentedControl, { SEGMENTED_CONTROL_TEST_ID } from './SegmentedControl'
import type SegmentedControlProps from './SegmentedControl.types'

describe('SegmentedControl', () => {
  const defaultProps: Partial<SegmentedControlProps> = {
    width: 144,
    selectedOptionIndex: 1,
    children: range(4).map((i) => <Text key={i}>{ i }</Text>),
  }

  const renderComponent = (props?: Partial<SegmentedControlProps>) => render(
    <SegmentedControl {...defaultProps} {...props} />,
  )

  let oldWindowResizeObserver

  beforeAll(() => {
    oldWindowResizeObserver = window.ResizeObserver
    window.ResizeObserver = ResizeObserver
  })

  afterAll(() => {
    window.ResizeObserver = oldWindowResizeObserver
  })

  it('Snapshot', () => {
    const { getByTestId } = renderComponent()
    const rendered = getByTestId(SEGMENTED_CONTROL_TEST_ID)

    expect(rendered).toMatchSnapshot()
  })
})
