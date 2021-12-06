/* External dependencies */
import React from 'react'
import { getWindow, getDocument } from 'ssr-window'
import { v4 as uuid } from 'uuid'

/* Internal dependencies */
import { LightFoundation } from 'Foundation'
import { render } from 'Utils/testUtils'
import ListItem, { LIST_ITEM_TEST_ID } from './ListItem'
import ListItemProps, { ListItemColorVariant, ListItemSize } from './ListItem.types'

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

  it('Snapshot >', () => {
    const { getByTestId } = renderComponent()
    const rendered = getByTestId(LIST_ITEM_TEST_ID)

    expect(rendered).toMatchSnapshot()
  })

  it('should have "optionKey" value on "data-option-key" ', () => {
    const { getByTestId } = renderComponent({ optionKey: 'my-menu-item' })
    const rendered = getByTestId(LIST_ITEM_TEST_ID)

    expect(rendered).toHaveAttribute('data-option-key', 'my-menu-item')
  })

  it('should have "data-active" attribute when "active" prop is "true', () => {
    const { getByTestId } = renderComponent({ active: true })
    const rendered = getByTestId(LIST_ITEM_TEST_ID)

    expect(rendered).toHaveAttribute('data-active', 'true')
  })

  it('should have "a tag" related attributes  when "href" prop is string', () => {
    const { getByTestId } = renderComponent({ href: 'https://naver.com' })
    const rendered = getByTestId(LIST_ITEM_TEST_ID)
    expect(rendered).toHaveAttribute('href', 'https://naver.com')
    expect(rendered).toHaveAttribute('rel', 'noopener noreferrer')
    expect(rendered).toHaveAttribute('target', '_blank')
  })

  it('sholud not to be in the Document when "hide" prop is true', () => {
    const { queryByTestId } = renderComponent({ hide: true })
    const rendered = queryByTestId(LIST_ITEM_TEST_ID)
    expect(rendered).not.toBeInTheDocument()
  })

  describe('should have correct style of "colorVariant"', () => {
    it('red', () => {
      const { getByTestId } = renderComponent({ colorVariant: ListItemColorVariant.Red })
      const rendered = getByTestId(LIST_ITEM_TEST_ID)
      expect(rendered).toHaveStyle(`color: ${LightFoundation.theme['bgtxt-red-normal']}`)
    })

    it('blue', () => {
      const { getByTestId } = renderComponent({ colorVariant: ListItemColorVariant.Blue })
      const rendered = getByTestId(LIST_ITEM_TEST_ID)
      expect(rendered).toHaveStyle(`color: ${LightFoundation.theme['bgtxt-blue-normal']}`)
    })

    it('green', () => {
      const { getByTestId } = renderComponent({ colorVariant: ListItemColorVariant.Green })
      const rendered = getByTestId(LIST_ITEM_TEST_ID)
      expect(rendered).toHaveStyle(`color: ${LightFoundation.theme['bgtxt-green-normal']}`)
    })

    it('cobalt', () => {
      const { getByTestId } = renderComponent({ colorVariant: ListItemColorVariant.Cobalt })
      const rendered = getByTestId(LIST_ITEM_TEST_ID)
      expect(rendered).toHaveStyle(`color: ${LightFoundation.theme['bgtxt-cobalt-normal']}`)
    })

    it('monoChrome', () => {
      const { getByTestId } = renderComponent({ colorVariant: ListItemColorVariant.Monochrome })
      const rendered = getByTestId(LIST_ITEM_TEST_ID)
      expect(rendered).toHaveStyle(`color: ${LightFoundation.theme['txt-black-darkest']}`)
    })
  })

  describe('should have correct style of "colorVariant" and "active" ', () => {
    it('red', () => {
      const { getByTestId } = renderComponent({ colorVariant: ListItemColorVariant.Red, active: true })
      const rendered = getByTestId(LIST_ITEM_TEST_ID)
      expect(rendered).toHaveStyle(`color: ${LightFoundation.theme['bgtxt-red-normal']}`)
    })

    it('blue', () => {
      const { getByTestId } = renderComponent({ colorVariant: ListItemColorVariant.Blue, active: true })
      const rendered = getByTestId(LIST_ITEM_TEST_ID)
      expect(rendered).toHaveStyle(`color: ${LightFoundation.theme['bgtxt-blue-normal']}`)
    })

    it('green', () => {
      const { getByTestId } = renderComponent({ colorVariant: ListItemColorVariant.Green, active: true })
      const rendered = getByTestId(LIST_ITEM_TEST_ID)
      expect(rendered).toHaveStyle(`color: ${LightFoundation.theme['bgtxt-green-normal']}`)
    })

    it('cobalt', () => {
      const { getByTestId } = renderComponent({ colorVariant: ListItemColorVariant.Cobalt, active: true })
      const rendered = getByTestId(LIST_ITEM_TEST_ID)
      expect(rendered).toHaveStyle(`color: ${LightFoundation.theme['bgtxt-cobalt-normal']}`)
    })

    it('monoChrome', () => {
      const { getByTestId } = renderComponent({ colorVariant: ListItemColorVariant.Monochrome, active: true })
      const rendered = getByTestId(LIST_ITEM_TEST_ID)
      expect(rendered).toHaveStyle(`color: ${LightFoundation.theme['bgtxt-blue-normal']}`)
    })
  })

  describe('should have correct style of "size"', () => {
    it('size S', () => {
      const { getByTestId } = renderComponent({ size: ListItemSize.S })
      const rendered = getByTestId(LIST_ITEM_TEST_ID)
      expect(rendered).toHaveStyle('padding-top: 4px')
      expect(rendered).toHaveStyle('padding-bottom: 4px')
      expect(rendered).toHaveStyle('border-radius: 6px')
    })

    it('size M', () => {
      const { getByTestId } = renderComponent({ size: ListItemSize.M })
      const rendered = getByTestId(LIST_ITEM_TEST_ID)
      expect(rendered).toHaveStyle('padding-top: 6px')
      expect(rendered).toHaveStyle('padding-bottom: 6px')
      expect(rendered).toHaveStyle('border-radius: 6px')
    })

    it('size L', () => {
      const { getByTestId } = renderComponent({ size: ListItemSize.L })
      const rendered = getByTestId(LIST_ITEM_TEST_ID)
      expect(rendered).toHaveStyle('padding-top: 8px')
      expect(rendered).toHaveStyle('padding-bottom: 8px')
      expect(rendered).toHaveStyle('border-radius: 8px')
    })

    it('size XL', () => {
      const { getByTestId } = renderComponent({ size: ListItemSize.XL })
      const rendered = getByTestId(LIST_ITEM_TEST_ID)
      expect(rendered).toHaveStyle('padding-top: 10px')
      expect(rendered).toHaveStyle('padding-bottom: 10px')
      expect(rendered).toHaveStyle('border-radius: 12px')
    })
  })

  /* icon, text 등 contents와 padding에 따라 height 변합니다. */
  describe('should render correct height according to "size"', () => {
    it('size S', () => {
      renderComponent({ content: 'test', leftIcon: 'check', size: ListItemSize.S })
      const rendered = getDocument().querySelector(`div[data-testid=${LIST_ITEM_TEST_ID}]`)
      if (rendered) {
        const style = getWindow().getComputedStyle(rendered)
        setTimeout(() => expect(style.height).toBe('28px'), 0)
      }
    })

    it('size M', () => {
      renderComponent({ content: 'test', leftIcon: 'check', size: ListItemSize.M })
      const rendered = getDocument().querySelector(`div[data-testid=${LIST_ITEM_TEST_ID}]`)
      if (rendered) {
        const style = getWindow().getComputedStyle(rendered)
        setTimeout(() => expect(style.height).toBe('32px'), 0)
      }
    })

    it('size L', () => {
      renderComponent({ content: 'test', leftIcon: 'check', size: ListItemSize.L })
      const rendered = getDocument().querySelector(`div[data-testid=${LIST_ITEM_TEST_ID}]`)
      if (rendered) {
        const style = getWindow().getComputedStyle(rendered)
        setTimeout(() => expect(style.height).toBe('36px'), 0)
      }
    })

    it('size XL', () => {
      renderComponent({ content: 'test', leftIcon: 'check', size: ListItemSize.XL })
      const rendered = getDocument().querySelector(`div[data-testid=${LIST_ITEM_TEST_ID}]`)
      if (rendered) {
        const style = getWindow().getComputedStyle(rendered)
        setTimeout(() => expect(style.height).toBe('44px'), 0)
      }
    })
  })
})

describe('ListItem adjacent sibling flatten border-radius >', () => {
  const actives: ListItemProps['active'][] = [true, false, true, true, true, false]

  const ListItemGroup = () => (
    <div>
      { actives.map((active, index) => (
        <ListItem
          key={uuid()}
          testId={`${index}`}
          active={active}
        />
      )) }
    </div>
  )

  const borderRadiusTopFlattenStyle = 'border-top-left-radius: 0px; border-top-right-radius: 0px;'
  const borderRadiusBottomFlattenStyle = 'border-bottom-left-radius: 0px; border-bottom-right-radius: 0px;'

  it('should not change style when "active" prop is false (1)', () => {
    const { getByTestId } = render(<ListItemGroup />)
    const rendered = getByTestId('1')
    expect(rendered).not.toHaveStyle(borderRadiusTopFlattenStyle)
    expect(rendered).not.toHaveStyle(borderRadiusBottomFlattenStyle)
  })

  it('should not change style when "active" prop is false (2)', () => {
    const { getByTestId } = render(<ListItemGroup />)
    const rendered = getByTestId('5')
    expect(rendered).not.toHaveStyle(borderRadiusTopFlattenStyle)
    expect(rendered).not.toHaveStyle(borderRadiusBottomFlattenStyle)
  })

  it('should not change style when "active" prop is true and not have "activated" sibling element', () => {
    const { getByTestId } = render(<ListItemGroup />)
    const rendered = getByTestId('0')
    expect(rendered).not.toHaveStyle(borderRadiusTopFlattenStyle)
    expect(rendered).not.toHaveStyle(borderRadiusBottomFlattenStyle)
  })

  it('should change style "border-bottom-radius: 0" when "active" prop is true and have only "activated" next sibling element',
    () => {
      const { getByTestId } = render(<ListItemGroup />)
      const rendered = getByTestId('2')
      expect(rendered).toHaveStyle(borderRadiusBottomFlattenStyle)
      expect(rendered).not.toHaveStyle(borderRadiusTopFlattenStyle)
    })

  it('should change style "border-radius: 0" when "active" prop is true and have "activated" next and prev sibling element',
    () => {
      const { getByTestId } = render(<ListItemGroup />)
      const rendered = getByTestId('3')
      expect(rendered).toHaveStyle(borderRadiusBottomFlattenStyle)
      expect(rendered).toHaveStyle(borderRadiusTopFlattenStyle)
    })

  it('should change style "border-top-radius: 0" when "active" prop is true and have only "activated" prev sibling element',
    () => {
      const { getByTestId } = render(<ListItemGroup />)
      const rendered = getByTestId('4')
      expect(rendered).toHaveStyle(borderRadiusTopFlattenStyle)
      expect(rendered).not.toHaveStyle(borderRadiusBottomFlattenStyle)
    })
})
