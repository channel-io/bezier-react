import * as React from 'react'

import { AllIcon } from '@channel.io/bezier-icons'


import baseTagBadgeStyles from '~/src/beta/BaseTagBadge/BaseTagBadge.module.scss'
import { render } from '~/src/utils/test'

import { Badge } from './Badge'
import { type BadgeProps } from './Badge.types'


describe('Badge', () => {
  const renderBadge = (props?: Partial<BadgeProps>) =>
    render(<Badge {...props}>Badge</Badge>)

  it('should render with default style', () => {
    const { getByText } = renderBadge()
    const rendered = getByText('Badge').parentElement

    expect(rendered).toHaveClass(baseTagBadgeStyles.BaseTagBadge)
    expect(rendered).toHaveClass(baseTagBadgeStyles['size-m'])
    expect(rendered).toHaveClass(baseTagBadgeStyles['variant-default'])
  })

  it('should forward ref', () => {
    const ref = React.createRef<HTMLDivElement>()

    render(<Badge ref={ref}>Badge</Badge>)

    expect(ref.current).toBeInTheDocument()
  })

  it('should render icon when icon is given', () => {
    const { container } = renderBadge({ icon: AllIcon })
    const icon = container.querySelector('svg')

    expect(icon).toBeInTheDocument()
  })

  it('should render without text when children is empty', () => {
    const { container, queryByText } = render(<Badge icon={AllIcon} />)
    const icon = container.querySelector('svg')

    expect(icon).toBeInTheDocument()
    expect(queryByText('Badge')).not.toBeInTheDocument()
  })

  it('should receive aria-label when truncated text is string', () => {
    const { getByLabelText } = renderBadge({ truncated: true })

    expect(getByLabelText('Badge')).toBeInTheDocument()
  })
})
