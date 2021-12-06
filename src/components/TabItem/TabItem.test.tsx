/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { render } from 'Utils/testUtils'
import TabItem, { TAB_ITEM_TEST_ID } from './TabItem'
import TabItemProps from './TabItem.types'

describe('TabItem', () => {
  let props: TabItemProps

  beforeEach(() => {
    props = {
      optionKey: 'tab-item',
      disabled: false,
      active: false,
    }
  })

  const renderComponent = (optionProps?: Partial<TabItemProps>) => render(
    <TabItem {...props} {...optionProps} />,
  )

  it('should have "optionKey" value on "data-option-key" attribute when "optionKey" prop given', () => {
    const { getByTestId } = renderComponent({ optionKey: 'my-tab-item' })
    const rendered = getByTestId(TAB_ITEM_TEST_ID)

    expect(rendered).toHaveAttribute('data-option-key', 'my-tab-item')
  })

  it('should have "false" value on "data-disabled" attribute when "disabled" prop is "false"', () => {
    const { getByTestId } = renderComponent({ disabled: false })
    const rendered = getByTestId(TAB_ITEM_TEST_ID)

    expect(rendered).toHaveAttribute('data-disabled', 'false')
  })

  it('should have "true" value on "data-disabled" attribute when "disabled" prop is "true"', () => {
    const { getByTestId } = renderComponent({ disabled: true })
    const rendered = getByTestId(TAB_ITEM_TEST_ID)

    expect(rendered).toHaveAttribute('data-disabled', 'true')
  })

  it('should have "data-active" attribute when "active" prop is "true"', () => {
    const { getByTestId } = renderComponent({ active: true })
    const rendered = getByTestId(TAB_ITEM_TEST_ID)

    expect(rendered).toHaveAttribute('data-active', 'true')
  })
})
