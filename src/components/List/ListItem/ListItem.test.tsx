/* External dependencies */
import React from 'react'
import { render } from '@testing-library/react'

/* Internal dependencies */
import ListItem, { SIDEBAR_MENU_ITEM_TEST_ID } from './ListItem'
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
    const rendered = getByTestId(SIDEBAR_MENU_ITEM_TEST_ID)

    expect(rendered).toHaveAttribute('data-option-key', 'my-menu-item')
  })

  it('should have "data-active" attribute when "active" prop is "true', () => {
    const { getByTestId } = renderComponent({ active: true })
    const rendered = getByTestId(SIDEBAR_MENU_ITEM_TEST_ID)

    expect(rendered).toHaveAttribute('data-active', 'true')
  })

  it('should have "a tag" related attributes  when "href" prop is string', () => {
    const { getByTestId } = renderComponent({ href: 'https://naver.com' })
    const rendered = getByTestId(SIDEBAR_MENU_ITEM_TEST_ID)
    expect(rendered).toHaveAttribute('href', 'https://naver.com')
    expect(rendered).toHaveAttribute('rel', 'noopener noreferer')
    expect(rendered).toHaveAttribute('target', '_blank')
  })
})
