/* External dependencies */
import React from 'react'
import { v4 as uuid } from 'uuid'

/* Internal dependencies */
import { LightFoundation } from 'Foundation'
import { render } from 'Utils/testUtils'
import {
  range,
} from 'Utils/numberUtils'
import { EditIcon, Icon } from 'Components/Icon'
import OutlineItem, { OUTLINE_ITEM_LEFT_ICON_TEST_ID, OUTLINE_ITEM_TEST_ID } from './OutlineItem'
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

  describe('should have correct background style', () => {
    it('should have no background style when not given focused or active prop', () => {
      const { getAllByTestId } = renderComponent()
      const rendered = getAllByTestId(OUTLINE_ITEM_TEST_ID)

      expect(rendered[0]).not.toHaveStyle(`background-color: ${LightFoundation.theme['bg-black-lighter']};`)
      expect(rendered[0]).not.toHaveStyle(`background-color: ${LightFoundation.theme['bgtxt-blue-lightest']};`)
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
      })
      const rendered = getAllByTestId(OUTLINE_ITEM_TEST_ID)

      expect(rendered[0]).not.toHaveStyle(`background-color: ${LightFoundation.theme['bg-black-lighter']};`)
    })
  })

  describe('should have correct left icon style', () => {
    it('shows default left icon color', () => {
      const { getByTestId } = renderComponent({ leftIcon: <Icon source={EditIcon} /> })
      const rendered = getByTestId(OUTLINE_ITEM_LEFT_ICON_TEST_ID)

      expect(rendered).toHaveStyle(`color: ${LightFoundation.theme['txt-black-dark']};`)
    })

    it('shows given leftIconColor if exists', () => {
      const { getByTestId } = renderComponent({ leftIcon: <Icon source={EditIcon} />, leftIconColor: 'bgtxt-green-normal' })
      const rendered = getByTestId(OUTLINE_ITEM_LEFT_ICON_TEST_ID)

      expect(rendered).toHaveStyle(`color: ${LightFoundation.theme['bgtxt-green-normal']};`)
    })

    it('shows active icon color, ignoring given leftIconColor', () => {
      const { getByTestId } = renderComponent({
        leftIcon: <Icon source={EditIcon} />,
        leftIconColor: 'bgtxt-green-normal',
        active: true,
      })
      const rendered = getByTestId(OUTLINE_ITEM_LEFT_ICON_TEST_ID)

      expect(rendered).toHaveStyle(`color: ${LightFoundation.theme['bgtxt-blue-normal']};`)
    })

    it('shows given leftIconColor even if "active = true", if "disableIconActive = true"', () => {
      const { getByTestId } = renderComponent({
        leftIcon: <Icon source={EditIcon} />,
        leftIconColor: 'bgtxt-purple-normal',
        active: true,
        disableIconActive: true,
      })
      const rendered = getByTestId(OUTLINE_ITEM_LEFT_ICON_TEST_ID)

      expect(rendered).toHaveStyle(`color: ${LightFoundation.theme['bgtxt-purple-normal']};`)
    })
  })
})
