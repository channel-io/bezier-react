/* External dependencies */
import React from 'react'
import { getWindow, getDocument } from 'ssr-window'

/* Internal dependencies */
import { render } from '../../utils/testUtils'
import ListItem, { LIST_ITEM_TEST_ID } from './ListItem'
import ListItemProps, { ListItemSize } from './ListItem.types'

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
