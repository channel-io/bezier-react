/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { render } from '~/src/utils/testUtils'
import Tabs, { TABS_TEST_ID } from './Tabs'
import TabsProps from './Tabs.types'

describe('Tabs', () => {
  let props: TabsProps

  beforeEach(() => {
    props = {
      disabled: false,
      selectedOptionIndex: 0,
    }
  })

  const renderComponent = (optionProps?: Partial<TabsProps>) => render(
    <Tabs {...props} {...optionProps} />,
  )

  it('should have default styles', () => {
    const { getByTestId } = renderComponent()
    const rendered = getByTestId(TABS_TEST_ID)

    expect(rendered).toHaveStyle('display: flex;')
    expect(rendered).toHaveStyle('flex-direction: row;')
    expect(rendered).toHaveStyle('flex-shrink: 0;')
    expect(rendered).toHaveStyle('justify-content: space-between;')
  })

  it('should have "false" value on "data-disabled" attribute when "disabled" prop is "false"', () => {
    const { getByTestId } = renderComponent({ disabled: false })
    const rendered = getByTestId(TABS_TEST_ID)

    expect(rendered).toHaveAttribute('data-disabled', 'false')
  })

  it('should have "true" value on "data-disabled" attribute when "disabled" prop is "true"', () => {
    const { getByTestId } = renderComponent({ disabled: true })
    const rendered = getByTestId(TABS_TEST_ID)

    expect(rendered).toHaveAttribute('data-disabled', 'true')
  })

  it('should have index on "data-active-index" attribute when given "selectedOptionIndex" prop is in range of children', () => {
    const { getByTestId } = renderComponent({ selectedOptionIndex: 2 })
    const rendered = getByTestId(TABS_TEST_ID)

    expect(rendered).toHaveAttribute('data-active-index', '2')
  })
})
