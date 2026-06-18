import { PlusIcon } from '@channel.io/bezier-icons'

import { render } from '~/src/utils/test'

import { ItemBase } from './ItemBase'

describe('ItemBase', () => {
  it('renders string content, description, and BezierIcon side content', () => {
    const { getByText, container } = render(
      <ItemBase
        leadingContent={PlusIcon}
        trailingContent="⌘K"
        description="Description"
      >
        Content
      </ItemBase>
    )

    expect(getByText('Content')).toBeInTheDocument()
    expect(getByText('Description')).toBeInTheDocument()
    expect(getByText('⌘K')).toBeInTheDocument()
    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
  })

  it('renders ReactNode content and applies interactive state classes', () => {
    const { getByText } = render(
      <ItemBase
        role="button"
        active
        disabled
        size="l"
        variant="destructive"
        description={<span>Custom description</span>}
      >
        <span>Custom content</span>
      </ItemBase>
    )

    const item = getByText('Custom content').closest('div[role="button"]')

    expect(getByText('Custom description')).toBeInTheDocument()
    expect(item).toHaveAttribute('aria-disabled', 'true')
    expect(item?.className).toContain('active')
    expect(item?.className).toContain('disabled')
    expect(item?.className).toContain('interactive')
    expect(item?.className).toContain('size-l')
    expect(item?.className).toContain('destructive')
  })
})
