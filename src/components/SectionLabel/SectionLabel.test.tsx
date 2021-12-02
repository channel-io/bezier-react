/* External dependencies */
import React from 'react'
import { LightFoundation } from '../../foundation'

/* Internal dependencies */
import { render } from '../../utils/testUtils'
import { BUTTON_TEST_ID } from '../Button/Button'
import { ICON_TEST_ID } from '../Icon/Icon'
import SectionLabel, {
  SECTION_LABEL_TEST_CONTENT_ID,
  SECTION_LABEL_TEST_LEFT_CONTENT_ID,
  SECTION_LABEL_TEST_RIGHT_CONTENT_ID,
} from './SectionLabel'
import type SectionLabelProps from './SectionLabel.types'

describe('SectionLabel', () => {
  const defaultProps: SectionLabelProps = {}

  function renderComponent(props?: Partial<SectionLabelProps>) {
    return render(<SectionLabel {...defaultProps} {...props} />)
  }

  it('renders string content as bold Text with Typography.Size13', () => {
    const { getByTestId } = renderComponent({ content: 'hi' })
    const content = getByTestId(SECTION_LABEL_TEST_CONTENT_ID)

    expect(content.children.length).toBe(1)
    expect(content.children.item(0)).toHaveStyle('font-weight: bold;')
    expect(content.children.item(0)).toHaveStyle('font-size: 13px;')
  })

  it('renders number content as bold text with Typography.Size13', () => {
    const { getByTestId } = renderComponent({ content: 123 })
    const content = getByTestId(SECTION_LABEL_TEST_CONTENT_ID)

    expect(content.children.length).toBe(1)
    expect(content.children.item(0)).toHaveStyle('font-weight: bold;')
    expect(content.children.item(0)).toHaveStyle('font-size: 13px;')
  })

  it('renders element content as it is', () => {
    const { getByTestId } = renderComponent({ content: <div id="i-am-sectionlabel-content-id" /> })
    const content = getByTestId(SECTION_LABEL_TEST_CONTENT_ID)

    expect(content.children.length).toBe(1)
    expect(content.children.item(0)?.id).toBe('i-am-sectionlabel-content-id')
  })

  it('does not render left content if given null', () => {
    const { getByTestId } = renderComponent()
    expect(() => getByTestId(SECTION_LABEL_TEST_LEFT_CONTENT_ID)).toThrowError()
  })

  it('renders left content with specified icon and default icon color', () => {
    const { getByTestId } = renderComponent({ leftContent: { icon: 'tag' } })
    const leftContent = getByTestId(SECTION_LABEL_TEST_LEFT_CONTENT_ID)

    expect(leftContent.children.length).toBe(1)

    const leftIcon = leftContent.children.item(0)

    expect(leftIcon).toHaveAttribute('data-testid', ICON_TEST_ID)
    expect(leftIcon).toHaveStyle(`color: ${LightFoundation.theme['txt-black-dark']};`)
  })

  it('renders left content with specified icon and icon color', () => {
    const { getByTestId } = renderComponent({ leftContent: { icon: 'tag', iconColor: 'bgtxt-orange-normal' } })
    const leftContent = getByTestId(SECTION_LABEL_TEST_LEFT_CONTENT_ID)

    expect(leftContent.children.length).toBe(1)

    const leftIcon = leftContent.children.item(0)

    expect(leftIcon).toHaveAttribute('data-testid', ICON_TEST_ID)
    expect(leftIcon).toHaveStyle(`color: ${LightFoundation.theme['bgtxt-orange-normal']};`)
  })

  it('renders left content as it is', () => {
    const { getByTestId } = renderComponent({ leftContent: <div id="foo" /> })
    const leftContent = getByTestId(SECTION_LABEL_TEST_LEFT_CONTENT_ID)

    expect(leftContent.children.length).toBe(1)

    const leftIcon = leftContent.children.item(0)
    expect(leftIcon?.id).toBe('foo')
  })

  it('does not render right content if given null', () => {
    const { getByTestId } = renderComponent()
    expect(() => getByTestId(SECTION_LABEL_TEST_RIGHT_CONTENT_ID)).toThrowError()
  })

  it('does not render right content if given empty array', () => {
    const { getByTestId } = renderComponent({ rightContent: [] })
    expect(() => getByTestId(SECTION_LABEL_TEST_RIGHT_CONTENT_ID)).toThrowError()
  })

  it('renders right content as button if only icon is specified', () => {
    const { getByTestId } = renderComponent({ rightContent: { icon: 'tag' } })
    const rightContent = getByTestId(SECTION_LABEL_TEST_RIGHT_CONTENT_ID)

    expect(rightContent.children.length).toBe(1)

    const rightButton = rightContent.children.item(0)

    expect(rightButton).toHaveAttribute('data-testid', BUTTON_TEST_ID)
    expect(rightButton).toHaveStyle('height: 20px') // NOTE: ButtonSize.XS
  })

  it('renders multiple right contents, and item with iconColor is not rendered as button', () => {
    const { getByTestId } = renderComponent({
      rightContent: [
        { icon: 'tag' },
        { icon: 'tool', iconColor: 'bgtxt-green-normal' },
      ],
    })
    const rightContent = getByTestId(SECTION_LABEL_TEST_RIGHT_CONTENT_ID)

    expect(rightContent.children.length).toBe(2)

    expect(rightContent.children.item(0)).toHaveAttribute('data-testid', BUTTON_TEST_ID)

    expect(rightContent.children.item(1)).not.toHaveAttribute('data-testid', BUTTON_TEST_ID)
  })

  it('renders right content as it is', () => {
    const { getByTestId } = renderComponent({
      rightContent: [
        <div id="foo" />,
        <div id="bar" />,
        <div id="foobar" />,
      ],
    })
    const rightContent = getByTestId(SECTION_LABEL_TEST_RIGHT_CONTENT_ID)

    expect(rightContent.children.length).toBe(3)

    expect(rightContent.children.item(0)?.id).toBe('foo')
    expect(rightContent.children.item(1)?.id).toBe('bar')
    expect(rightContent.children.item(2)?.id).toBe('foobar')
  })
})
