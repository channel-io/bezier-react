/* External dependencies */
import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { v4 as uuid } from 'uuid'
import { range } from 'lodash-es'

/* Internal dependencies */
import { ListItem } from '../ListItem'
import ListMenuGroup, { SIDEBAR_MENU_GROUP_TEST_ID } from './ListMenuGroup'
import ListMenuGroupProps from './ListMenuGroup.types'

describe('ListMenuGroup', () => {
  let props: ListMenuGroupProps

  beforeEach(() => {
    props = {
      open: true,
      selectedOptionIndex: 0,
      content: 'campaigns',
    }
  })

  const renderComponent = (optionProps?: Partial<ListMenuGroupProps>) => render(
    <ListMenuGroup {...props} {...optionProps}>
      { range(0, 4).map(n => (
        <ListItem
          key={uuid()}
          optionKey={`menu-item-${n}`}
          content={`item ${n}`}
        />
      )) }
    </ListMenuGroup>,
  )

  it('should have default styles', () => {
    const { getByTestId } = renderComponent()
    const rendered = getByTestId(SIDEBAR_MENU_GROUP_TEST_ID)

    expect(rendered).toHaveStyle('display: flex;')
    expect(rendered).toHaveStyle('align-items: center;')
    expect(rendered).toHaveStyle('height: 32px;')
  })

  it(
    'should have index on "data-active-index" attr when "selectedOptionIndex" given',
    () => {
      const { getByTestId } = renderComponent({ selectedMenuItemIndex: 2 })
      const rendered = getByTestId(SIDEBAR_MENU_GROUP_TEST_ID)

      expect(rendered).toHaveAttribute('data-active-index', '2')
    })

  it('should change "data-active-index"', () => {
    const { getByTestId } = renderComponent({ selectedMenuItemIndex: 1 })
    const rendered = getByTestId(SIDEBAR_MENU_GROUP_TEST_ID)

    expect(rendered).toHaveAttribute('data-active-index', '1')
    fireEvent.click(screen.getByText('item 3'))
    expect(rendered).toHaveAttribute('data-active-index', '3')
  })
})
