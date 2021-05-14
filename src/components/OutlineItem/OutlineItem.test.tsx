/* External dependencies */
import React from 'react'
import { v4 as uuid } from 'uuid'
import { range } from 'lodash-es'

/* Internal dependencies */
import { render } from '../../utils/testUtils'
import OutlineItem, { OUTLINE_ITEM_TEST_ID } from './OutlineItem'
import OutlineItemProps from './OutlineItem.types'

describe('OutlineItem', () => {
  let props: OutlineItemProps

  beforeEach(() => {
    props = {
      optionKey: 'optionKey',
      open: true,
      content: 'campaigns',
    }
  })

  const renderComponent = (optionProps?: Partial<OutlineItemProps>) => render(
    <OutlineItem {...props} {...optionProps}>
      { range(0, 4).map(n => (
        <OutlineItem
          key={uuid()}
          optionKey={`menu-item-${n}`}
          content={`item ${n}`}
        />
      )) }
    </OutlineItem>,
  )

  it('should have default styles', () => {
    const { getAllByTestId } = renderComponent()
    const rendered = getAllByTestId(OUTLINE_ITEM_TEST_ID)

    expect(rendered[0]).toHaveStyle('display: flex;')
    expect(rendered[0]).toHaveStyle('align-items: center;')
    expect(rendered[0]).toHaveStyle('height: 32px;')
  })

  it('should have index on "data-active-index" attr when "selectedOptionIndex" given', () => {
    const { getAllByTestId } = renderComponent({ selectedOutlineItemIndex: 2 })
    const rendered = getAllByTestId(OUTLINE_ITEM_TEST_ID)

    expect(rendered[0]).toHaveAttribute('data-active-index', '2')
  })
})
