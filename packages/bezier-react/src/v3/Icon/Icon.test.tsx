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
      `--b-v3-icon-color: ${colorTokenCssVar('icon-neutral')}`
    )
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
      `--b-v3-icon-color: ${colorTokenCssVar('icon-neutral-heavier')}`
    )
    expect(rendered).toHaveStyle('display: block')
    expect(rendered).toHaveStyle('--b-margin-top: 10px')
  })
})
