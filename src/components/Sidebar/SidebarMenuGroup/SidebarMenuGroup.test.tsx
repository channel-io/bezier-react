/* External dependencies */
import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { v4 as uuid } from 'uuid'
import _ from 'lodash'

/* Internal dependencies */
import { SidebarMenuItem } from '../SidebarMenuItem'
import Palette from '../../../styling/Palette'
import SidebarMenuGroup, { SIDEBAR_MENU_GROUP_TEST_ID } from './SidebarMenuGroup'
import SidebarMenuGroupProps from './SidebarMenuGroup.types'

describe('SidebarMenuGroup', () => {
  let props: SidebarMenuGroupProps

  beforeEach(() => {
    props = {
      open: true,
      selectedOptionIndex: 0,
      content: 'campaigns',
    }
  })

  const renderComponent = (optionProps?: Partial<SidebarMenuGroupProps>) => render(
    <SidebarMenuGroup {...props} {...optionProps}>
      { _.range(0, 4).map(n => (
        <SidebarMenuItem
          key={uuid()}
          optionKey={`menu-item-${n}`}
          content={`item ${n}`}
        />
      )) }
    </SidebarMenuGroup>,
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

  it('should change color when "currentMenuItemIndex" attr is give as number', () => {
    const { getByTestId } = renderComponent()
    const rendered = getByTestId(SIDEBAR_MENU_GROUP_TEST_ID)

    fireEvent.click(screen.getByText('item 3'))
    expect(rendered).toHaveStyle(`color: ${Palette.blue500};`)
    expect(rendered).toHaveStyle(`background-color: ${Palette.grey200};`)
  })
})
