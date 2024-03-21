import React from 'react'

import { render } from '~/src/utils/test'

import { LIST_ITEM_TEST_ID, ListItem } from './ListItem'
import { type ListItemProps } from './ListItem.types'

describe('ListItem', () => {
  let props: ListItemProps

  beforeEach(() => {
    props = {
      content: 'this is content',
      active: false,
    }
  })

  const renderComponent = (optionProps?: Partial<ListItemProps>) =>
    render(
      <ListItem
        {...props}
        {...optionProps}
      />
    )

  it('should have "a tag" related attributes  when "href" prop is string', () => {
    const { getByTestId } = renderComponent({ href: 'https://naver.com' })
    const rendered = getByTestId(LIST_ITEM_TEST_ID)
    expect(rendered).toHaveAttribute('href', 'https://naver.com')
    expect(rendered).toHaveAttribute('rel', 'noopener noreferrer')
    expect(rendered).toHaveAttribute('target', '_blank')
  })
})
