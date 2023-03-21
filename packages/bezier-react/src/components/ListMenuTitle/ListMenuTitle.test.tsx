/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { render } from '~/src/utils/testUtils'
import ListMenuTitle, { SIDEBAR_MENU_TITLE_TEST_ID } from './ListMenuTitle'
import type ListMenuTitleProps from './ListMenuTitle.types'

describe('ListMenuTitle Test >', () => {
  let props: ListMenuTitleProps

  beforeEach(() => {
    props = {
      content: 'test-title',
    }
  })

  const renderListMenuTitle = (optionPtops?: ListMenuTitleProps) =>
    render(<ListMenuTitle {...props} {...optionPtops} />)

  it('ListMenuTitle should have flex', () => {
    const { getByTestId } = renderListMenuTitle()

    const rendered = getByTestId(SIDEBAR_MENU_TITLE_TEST_ID)

    expect(rendered).toHaveStyle('display: flex;')
    expect(rendered).toHaveStyle('flex-direction: row')
  })
})
