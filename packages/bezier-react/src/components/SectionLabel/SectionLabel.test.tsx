import React from 'react'

import { LightFoundation } from '~/src/foundation'

import { render } from '~/src/utils/testUtils'

import { BUTTON_TEST_ID } from '~/src/components/Button/Button'
import { DIVIDER_TEST_ID } from '~/src/components/Divider/Divider'
import { ICON_TEST_ID } from '~/src/components/Icon/Icon'

import SectionLabel, {
  SECTION_LABEL_TEST_CONTENT_ID,
  SECTION_LABEL_TEST_HELP_CONTENT_ID,
  SECTION_LABEL_TEST_ID,
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
    expect(content.children.item(0)).toHaveStyle('font-size: 1.3rem;')
  })

  it('renders number content as bold text with Typography.Size13', () => {
    const { getByTestId } = renderComponent({ content: 123 })
    const content = getByTestId(SECTION_LABEL_TEST_CONTENT_ID)

    expect(content.children.length).toBe(1)
    expect(content.children.item(0)).toHaveStyle('font-weight: bold;')
    expect(content.children.item(0)).toHaveStyle('font-size: 1.3rem;')
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

  it('renders help content with default color if the help prop exists', () => {
    const { getByTestId } = renderComponent({
      help: {
        tooltipContent: <div>happy</div>,
      },
    })
    const helpContent = getByTestId(SECTION_LABEL_TEST_HELP_CONTENT_ID)

    expect(helpContent.children.length).toBe(1)

    const helpIcon = helpContent.children.item(0)
    expect(helpIcon).toHaveAttribute('data-testid', ICON_TEST_ID)
    expect(helpIcon).toHaveStyle(`color: ${LightFoundation.theme['txt-black-dark']};`)
  })

  it('renders help content with specified icon and icon color', () => {
    const { getByTestId } = renderComponent({
      help: {
        icon: 'weather-snow',
        tooltipContent: <div>happy</div>,
        iconColor: 'txt-white-normal',
      },
    })
    const helpContent = getByTestId(SECTION_LABEL_TEST_HELP_CONTENT_ID)

    expect(helpContent.children.length).toBe(1)

    const helpIcon = helpContent.children.item(0)
    expect(helpIcon).toHaveAttribute('data-testid', ICON_TEST_ID)
    expect(helpIcon).toHaveStyle(`color: ${LightFoundation.theme['txt-white-normal']};`)
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
        <div key="foo" id="foo" />,
        <div key="bar" id="bar" />,
        <div key="foobar" id="foobar" />,
      ],
    })
    const rightContent = getByTestId(SECTION_LABEL_TEST_RIGHT_CONTENT_ID)

    expect(rightContent.children.length).toBe(3)

    expect(rightContent.children.item(0)?.id).toBe('foo')
    expect(rightContent.children.item(1)?.id).toBe('bar')
    expect(rightContent.children.item(2)?.id).toBe('foobar')
  })

  it('renders with divider if the divider prop is true', () => {
    const { getByTestId } = renderComponent({
      divider: true,
    })

    const content = getByTestId(SECTION_LABEL_TEST_ID)

    expect(content.children.item(0)).toHaveAttribute('data-testid', DIVIDER_TEST_ID)
  })
})
