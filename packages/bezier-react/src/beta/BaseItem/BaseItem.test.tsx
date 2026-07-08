import { PlusIcon } from '@channel.io/bezier-icons'

import baseItemStyles from '~/src/beta/BaseItem/BaseItem.module.scss'
import textStyles from '~/src/beta/Text/Text.module.scss'
import { render } from '~/src/utils/test'

import { BaseItem } from './BaseItem'

describe('BaseItem', () => {
  it('renders string content, description, and BezierIcon side content', () => {
    const { getByText, container } = render(
      <BaseItem
        leadingContent={PlusIcon}
        trailingContent="⌘K"
        description="Description"
      >
        Content
      </BaseItem>
    )

    expect(getByText('Content')).toBeInTheDocument()
    expect(getByText('Description')).toBeInTheDocument()
    expect(getByText('⌘K')).toBeInTheDocument()
    expect(container.querySelector('svg')).toHaveAttribute(
      'aria-hidden',
      'true'
    )
  })

  it('renders trailing content as a root-level sibling of the content wrapper', () => {
    const { getByText } = render(
      <BaseItem
        description="Description"
        trailingContent="⌘K"
      >
        Content
      </BaseItem>
    )

    const trailingContent = getByText('⌘K').closest(
      `.${baseItemStyles.TrailingContent}`
    )

    expect(trailingContent?.parentElement).toHaveClass(baseItemStyles.BaseItem)
    expect(trailingContent?.closest(`.${baseItemStyles.Content}`)).toBeNull()
  })

  it('renders an anchor root when href is provided', () => {
    const { getByRole } = render(
      <BaseItem href="/settings">
        Settings
      </BaseItem>
    )

    const item = getByRole('link', { name: 'Settings' })

    expect(item.tagName).toBe('A')
    expect(item).toHaveAttribute('href', '/settings')
  })

  it('renders a button root when onClick is provided', () => {
    const { getByRole } = render(
      <BaseItem onClick={jest.fn()}>Settings</BaseItem>
    )

    const item = getByRole('button', { name: 'Settings' })

    expect(item.tagName).toBe('BUTTON')
    expect(item).toHaveAttribute('type', 'button')
  })

  it('keeps an explicit div root even when onClick is provided', () => {
    const { getByText } = render(
      <BaseItem
        as="div"
        role="menuitem"
        onClick={jest.fn()}
      >
        Settings
      </BaseItem>
    )

    const item = getByText('Settings').closest('[role="menuitem"]')

    expect(item?.tagName).toBe('DIV')
  })

  it('centers content row for single-line items', () => {
    const { getByText } = render(<BaseItem>Content</BaseItem>)

    expect(
      getByText('Content').closest(`.${baseItemStyles.Content}`)
    ).toHaveClass(baseItemStyles['single-line'])
  })

  it('keeps content row top-aligned for items with description', () => {
    const { getByText } = render(
      <BaseItem description="Description">Content</BaseItem>
    )

    expect(
      getByText('Content').closest(`.${baseItemStyles.Content}`)
    ).not.toHaveClass(baseItemStyles['single-line'])
  })

  it('does not truncate string content by default', () => {
    const { getByText } = render(<BaseItem>Long content</BaseItem>)

    expect(getByText('Long content')).not.toHaveClass(textStyles.truncated)
    expect(getByText('Long content')).not.toHaveClass(
      textStyles['multi-line-truncated']
    )
  })

  it('truncates string content when contentMaxLines is provided', () => {
    const { getByText, rerender } = render(
      <BaseItem contentMaxLines={1}>
        Single line content
      </BaseItem>
    )

    expect(getByText('Single line content')).toHaveClass(textStyles.truncated)

    rerender(
      <BaseItem contentMaxLines={2}>
        Multi line content
      </BaseItem>
    )

    expect(getByText('Multi line content')).toHaveClass(
      textStyles['multi-line-truncated']
    )
  })

  it('does not truncate string description', () => {
    const { getByText } = render(
      <BaseItem description="Long description">Content</BaseItem>
    )

    expect(getByText('Long description')).not.toHaveClass(
      textStyles['multi-line-truncated']
    )
  })

  it('renders ReactNode content and applies interactive state classes', () => {
    const { getByText } = render(
      <BaseItem
        role="button"
        interactive
        active
        disabled
        size="m"
        variant="destructive"
        description={<span>Custom description</span>}
      >
        <span>Custom content</span>
      </BaseItem>
    )

    const item = getByText('Custom content').closest('div[role="button"]')

    expect(getByText('Custom description')).toBeInTheDocument()
    expect(item).toHaveAttribute('aria-disabled', 'true')
    expect(item?.className).toContain('active')
    expect(item?.className).toContain('disabled')
    expect(item?.className).toContain('interactive')
    expect(item?.className).toContain('size-m')
    expect(item?.className).toContain('destructive')
  })
})
