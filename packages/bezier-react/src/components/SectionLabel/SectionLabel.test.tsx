import React from 'react'

import {
  TagIcon,
  ToolIcon,
} from '@channel.io/bezier-icons'

import { render } from '~/src/utils/test'

import { BUTTON_TEST_ID } from '~/src/components/Button/Button'
import { HELP_TEST_ID } from '~/src/components/Help/Help'
import { ICON_TEST_ID } from '~/src/components/Icon/Icon'

import { SectionLabel } from './SectionLabel'
import type { SectionLabelProps } from './SectionLabel.types'

describe('SectionLabel', () => {
  function renderComponent(props?: Partial<SectionLabelProps>) {
    return render(<SectionLabel {...props} />)
  }

  it('should renders element content as it is', () => {
    const { getByText } = renderComponent({ content: 'foo' })
    expect(getByText('foo')).toBeInTheDocument()
  })

  it('should renders as button if onClick prop exists', () => {
    const { getByRole } = renderComponent({ onClick: jest.fn() })
    expect(getByRole('button')).toBeInTheDocument()
  })

  it('should renders left content with specified icon and default icon color', () => {
    const { getByTestId } = renderComponent({ leftContent: TagIcon })
    expect(getByTestId(ICON_TEST_ID)).toBeInTheDocument()
  })

  it('should renders left content as it is', () => {
    const { getByText } = renderComponent({ leftContent: 'foo' })
    expect(getByText('foo')).toBeInTheDocument()
  })

  it('should renders help icon if help prop exists', () => {
    const { getByTestId } = renderComponent({ help: <div>happy</div> })
    expect(getByTestId(HELP_TEST_ID)).toBeInTheDocument()
  })

  it('should renders right content as button(only appearance) if only icon is specified', () => {
    const { getByTestId } = renderComponent({ rightContent: TagIcon })
    expect(getByTestId(BUTTON_TEST_ID)).toBeInTheDocument()
  })

  it('should render right content as button if icon and onClick props of rightContent existed', () => {
    const { getByRole } = renderComponent({
      rightContent: { icon: ToolIcon, onClick: jest.fn() },
    })
    expect(getByRole('button')).toBeInTheDocument()
  })

  it('should renders multiple right contents, and item with iconColor is not rendered as button', () => {
    const { getAllByTestId, getAllByRole } = renderComponent({
      rightContent: [
        TagIcon,
        { icon: ToolIcon, onClick: jest.fn() },
      ],
    })
    expect(getAllByTestId(BUTTON_TEST_ID)).toHaveLength(2)
    expect(getAllByRole('button')).toHaveLength(1)
  })

  it('should renders right content as it is', () => {
    const { getByText } = renderComponent({
      rightContent: [
        <div key="foo">foo</div>,
        'bar',
      ],
    })
    expect(getByText('foo')).toBeInTheDocument()
    expect(getByText('bar')).toBeInTheDocument()
  })
})
