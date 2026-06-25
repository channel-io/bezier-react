import * as React from 'react'


import { render } from '~/src/utils/test'

import { BaseTagBadge, BaseTagBadgeText } from './BaseTagBadge'

import styles from './BaseTagBadge.module.scss'


describe('BaseTagBadge', () => {
  it('should render with size and variant style', () => {
    const { getByText } = render(
      <BaseTagBadge
        size="m"
        variant="blue"
      >
        Badge
      </BaseTagBadge>
    )
    const rendered = getByText('Badge')

    expect(rendered).toHaveClass(styles.BaseTagBadge)
    expect(rendered).toHaveClass(styles['size-m'])
    expect(rendered).toHaveClass(styles['variant-blue'])
  })

  it('should forward ref', () => {
    const ref = React.createRef<HTMLDivElement>()

    render(
      <BaseTagBadge
        ref={ref}
        size="m"
        variant="blue"
      />
    )

    expect(ref.current).toBeInTheDocument()
  })
})

describe('BaseTagBadgeText', () => {
  it('should render text with proper style', () => {
    const { getByText } = render(
      <BaseTagBadgeText size="xs">Badge</BaseTagBadgeText>
    )
    const rendered = getByText('Badge')

    expect(rendered).toHaveClass(styles.label)
    expect(rendered).toHaveClass(styles['label-xs'])
    expect(rendered).toHaveClass('typo-11')
    expect(rendered).toHaveStyle(
      '--b-text-font-weight: var(--typography-font-weight-400)'
    )
  })
})
