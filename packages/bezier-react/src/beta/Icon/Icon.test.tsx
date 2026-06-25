import * as React from 'react'

import { AllIcon } from '@channel.io/bezier-icons'


import { colorTokenCssVar } from '~/src/utils/style'
import { render } from '~/src/utils/test'

import { Icon } from './Icon'
import { type IconProps } from './Icon.types'

import styles from './Icon.module.scss'


describe('Icon', () => {
  const renderIcon = (props?: Partial<IconProps>) =>
    render(
      <Icon
        source={AllIcon}
        {...props}
      />
    )

  it('should render with default style', () => {
    const { container } = renderIcon()
    const rendered = container.querySelector('svg')

    expect(rendered).toHaveClass(styles.Icon)
    expect(rendered).toHaveClass(styles['size-24'])
    expect(rendered).toHaveStyle(
      `--b-beta-icon-color: ${colorTokenCssVar('icon-neutral')}`
    )
    expect(rendered).toHaveAttribute('aria-hidden', 'true')
    expect(rendered).toHaveAttribute('focusable', 'false')
    expect(rendered).not.toHaveAttribute('role')
  })

  it('should forward ref', () => {
    const ref = React.createRef<SVGSVGElement>()

    render(
      <Icon
        ref={ref}
        source={AllIcon}
      />
    )

    expect(ref.current).toBeInTheDocument()
  })

  it('should receive color, size, margin, style, and class name', () => {
    const { container } = renderIcon({
      color: 'icon-neutral-heavier',
      size: '44',
      marginTop: 10,
      style: { display: 'block' },
      className: 'test-class',
    })
    const rendered = container.querySelector('svg')

    expect(rendered).toHaveClass(styles['size-44'])
    expect(rendered).toHaveClass('test-class')
    expect(rendered).toHaveStyle(
      `--b-beta-icon-color: ${colorTokenCssVar('icon-neutral-heavier')}`
    )
    expect(rendered).toHaveStyle('display: block')
    expect(rendered).toHaveStyle('--b-margin-top: 10px')
  })

  it('should expose meaningful icons when an accessible name is provided', () => {
    const { container } = renderIcon({
      'aria-label': 'All items',
    })
    const rendered = container.querySelector('svg')

    expect(rendered).toHaveAttribute('aria-label', 'All items')
    expect(rendered).toHaveAttribute('role', 'img')
    expect(rendered).not.toHaveAttribute('aria-hidden')
    expect(rendered).not.toHaveAttribute('focusable')
  })

  it('should preserve explicit accessibility props', () => {
    const { container } = renderIcon({
      'aria-label': 'All items',
      'aria-hidden': true,
      role: 'presentation',
      focusable: false,
    })
    const rendered = container.querySelector('svg')

    expect(rendered).toHaveAttribute('aria-hidden', 'true')
    expect(rendered).toHaveAttribute('role', 'presentation')
    expect(rendered).toHaveAttribute('focusable', 'false')
  })
})
