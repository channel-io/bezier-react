/* External dependencies */
import React from 'react'
import { range } from 'lodash-es'

/* Internal dependencies */
import { LightFoundation } from '~/src/foundation'
import { render } from '~/src/utils/testUtils'
import ResizeObserver from './__mocks__/ResizeObserver'
import SegmentedControl, { SEGMENTED_CONTROL_TEST_ID, segmentedControlOptionItemTestId } from './SegmentedControl'
import type SegmentedControlProps from './SegmentedControl.types'
import { Text } from '~/src/components/Text'
import disabledOpacity from '~/src/constants/DisabledOpacity'

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

  it('has active and non-active items with correct style', () => {
    const { getByTestId } = renderComponent({ selectedOptionIndex: 1 })

    const firstItem = getByTestId(segmentedControlOptionItemTestId(0))
    const secondItem = getByTestId(segmentedControlOptionItemTestId(1))

    expect(firstItem).toHaveStyle(`color: ${LightFoundation.theme['txt-black-dark']};`)
    expect(secondItem).toHaveStyle(`color: ${LightFoundation.theme['txt-black-darkest']};`)
  })

  it('should have correct disabled style', () => {
    const { getByTestId } = renderComponent({ disabled: true })
    const rendered = getByTestId(SEGMENTED_CONTROL_TEST_ID)

    expect(rendered).toHaveStyle(`opacity: ${disabledOpacity};`)
  })

  it('has active and non-active items with correct style, even if disabled', () => {
    const { getByTestId } = renderComponent({ disabled: true, selectedOptionIndex: 1 })

    const firstItem = getByTestId(segmentedControlOptionItemTestId(0))
    const secondItem = getByTestId(segmentedControlOptionItemTestId(1))

    expect(firstItem).toHaveStyle(`color: ${LightFoundation.theme['txt-black-dark']};`)
    expect(secondItem).toHaveStyle(`color: ${LightFoundation.theme['txt-black-darkest']};`)
  })
})
