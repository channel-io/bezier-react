/* External dependencies */
import React from 'react'
import { v4 as uuid } from 'uuid'
import { range } from 'lodash-es'

/* Internal dependencies */
import { LightFoundation } from '../../foundation'
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
    expect(rendered[0]).toHaveStyle('height: 28px;')
  })

  it('should have index on "data-active-index" attr when "selectedOptionIndex" given', () => {
    const { getAllByTestId } = renderComponent({ selectedOutlineItemIndex: 2 })
    const rendered = getAllByTestId(OUTLINE_ITEM_TEST_ID)

    expect(rendered[0]).toHaveAttribute('data-active-index', '2')
  })

  it('should have focused style when given "focused = true"', () => {
    const { getAllByTestId } = renderComponent({ focused: true })
    const rendered = getAllByTestId(OUTLINE_ITEM_TEST_ID)

    expect(rendered[0]).toHaveStyle(`background-color: ${LightFoundation.theme['bg-black-lighter']};`)
  })

  it('should have active style when given "active = true"', () => {
    const { getAllByTestId } = renderComponent({ active: true })
    const rendered = getAllByTestId(OUTLINE_ITEM_TEST_ID)

    expect(rendered[0]).toHaveStyle(`background-color: ${LightFoundation.theme['bgtxt-blue-lightest']};`)
  })

  it('should have active style when given both "focused = true" and "active = true"', () => {
    const { getAllByTestId } = renderComponent({ active: true, focused: true })
    const rendered = getAllByTestId(OUTLINE_ITEM_TEST_ID)

    expect(rendered[0]).toHaveStyle(`background-color: ${LightFoundation.theme['bgtxt-blue-lightest']};`)
  })

  it('cannot have focused style when "selectedOutlineItemIndex" prop is not null', () => {
    const { getAllByTestId } = renderComponent({
      focused: true,
      selectedOutlineItemIndex: 0,
      children: renderComponent(),
    })
    const rendered = getAllByTestId(OUTLINE_ITEM_TEST_ID)

    expect(rendered[0]).not.toHaveStyle(`background-color: ${LightFoundation.theme['bg-black-lighter']};`)
  })
})
