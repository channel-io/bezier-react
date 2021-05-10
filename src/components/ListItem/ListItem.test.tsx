/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { render } from '../../utils/testUtils'
import ListItem, { LIST_ITEM_COMPONENT_NAME } from './ListItem'
import ListItemProps from './ListItem.types'

describe('ListItem', () => {
  let props: ListItemProps

  beforeEach(() => {
    props = {
      content: 'this is content',
      optionKey: 'menu-item',
      active: false,
    }
  })

  const renderComponent = (optionProps?: Partial<ListItemProps>) => render(
    <ListItem {...props} {...optionProps} />,
  )

  it('should have "optionKey" value on "data-option-key" ', () => {
    const { getByTestId } = renderComponent({ optionKey: 'my-menu-item' })
    const rendered = getByTestId(LIST_ITEM_COMPONENT_NAME)

    expect(rendered).toHaveAttribute('data-option-key', 'my-menu-item')
  })

  it('should have "data-active" attribute when "active" prop is "true', () => {
    const { getByTestId } = renderComponent({ active: true })
    const rendered = getByTestId(LIST_ITEM_COMPONENT_NAME)

    expect(rendered).toHaveAttribute('data-active', 'true')
  })

  it('should have "a tag" related attributes  when "href" prop is string', () => {
    const { getByTestId } = renderComponent({ href: 'https://naver.com' })
    const rendered = getByTestId(LIST_ITEM_COMPONENT_NAME)
    expect(rendered).toHaveAttribute('href', 'https://naver.com')
    expect(rendered).toHaveAttribute('rel', 'noopener noreferrer')
    expect(rendered).toHaveAttribute('target', '_blank')
  })
})
