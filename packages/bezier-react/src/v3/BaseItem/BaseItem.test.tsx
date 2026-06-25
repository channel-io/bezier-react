import { PlusIcon } from '@channel.io/bezier-icons'

import { render } from '~/src/utils/test'
import textStyles from '~/src/v3/Text/Text.module.scss'

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
    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
  })

  it('does not truncate string description', () => {
    const { getByText } = render(
      <BaseItem description="Long description">
        Content
      </BaseItem>
    )

    expect(getByText('Long description')).not.toHaveClass(
      textStyles['multi-line-truncated']
    )
  })

  it('renders ReactNode content and applies interactive state classes', () => {
    const { getByText } = render(
      <BaseItem
        role="button"
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
