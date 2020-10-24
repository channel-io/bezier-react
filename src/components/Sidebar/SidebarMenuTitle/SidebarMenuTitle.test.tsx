/* External dependencies */
import React from 'react'
import { render } from '@testing-library/react'

/* Internal dependencies */
import SidebarMenuTitle, { SIDEBAR_MENU_TITLE_TEST_ID } from './SidebarMenuTitle'
import SidebarMenuTitleProps from './SidebarMenuTitle.types'

describe('SidebarMenuTitle Test >', () => {
  let props: SidebarMenuTitleProps

  beforeEach(() => {
    props = {
      content: 'test-title',
    }
  })

  const renderSidebarMenuTitle = (optionPtops?: SidebarMenuTitleProps) =>
    render(<SidebarMenuTitle {...props} {...optionPtops} />)

  it('SidebarMenuTitle should have flex', () => {
    const { getByTestId } = renderSidebarMenuTitle()

    const rendered = getByTestId(SIDEBAR_MENU_TITLE_TEST_ID)

    expect(rendered).toHaveStyle('display: flex;')
  })
})
