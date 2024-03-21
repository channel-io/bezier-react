import React from 'react'

import { render } from '~/src/utils/test'

import { OUTLINE_ITEM_TEST_ID, OutlineItem } from './OutlineItem'
import { type OutlineItemProps } from './OutlineItem.types'

describe('OutlineItem', () => {
  let props: OutlineItemProps

  beforeEach(() => {
    props = {
      open: true,
      content: 'Lorem ipsum',
    }
  })

  const renderComponent = (optionProps?: Partial<OutlineItemProps>) =>
    render(
      <OutlineItem
        {...props}
        {...optionProps}
      >
        <OutlineItem content="Lorem ipsum" />
      </OutlineItem>
    )

  it('should have sibling elements if open is true.', () => {
    const { getAllByTestId } = renderComponent()
    const outlineItem = getAllByTestId(OUTLINE_ITEM_TEST_ID)
    expect(outlineItem[0]).toBeInTheDocument()
    const siblingElements = outlineItem[0].nextSibling
    expect(siblingElements).not.toBeNull()
  })

  it('should not have sibling elements if open is false.', () => {
    const { getAllByTestId } = renderComponent({ open: false })
    const outlineItem = getAllByTestId(OUTLINE_ITEM_TEST_ID)
    expect(outlineItem[0]).toBeInTheDocument()
    const siblingElements = outlineItem[0].nextSibling
    expect(siblingElements).toBeNull()
  })
})
