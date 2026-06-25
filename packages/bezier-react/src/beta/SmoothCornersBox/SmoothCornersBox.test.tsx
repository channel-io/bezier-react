
import { render } from '~/src/utils/test'

import { SmoothCornersBox } from './SmoothCornersBox'
import { type SmoothCornersBoxProps } from './SmoothCornersBox.types'

import styles from './SmoothCornersBox.module.scss'


describe('SmoothCornersBox', () => {
  const renderSmoothCornersBox = (
    { children, ...rest }: SmoothCornersBoxProps = { borderRadius: 0 }
  ) => render(<SmoothCornersBox {...rest}>{children}</SmoothCornersBox>)

  it('should render with disabled state by default', () => {
    const children = 'Hello, Channel!'
    const { getByText } = renderSmoothCornersBox({ children, borderRadius: 10 })
    const rendered = getByText(children)

    expect(rendered).toHaveClass(styles.SmoothCornersBox)
    expect(rendered).toHaveAttribute('data-state', 'disabled')
  })

  it('each style property must have the correct unit.', () => {
    const children = 'Hello, Channel!'
    const { getByText } = renderSmoothCornersBox({
      children,
      borderRadius: 10,
      margin: 10,
      shadow: {
        offsetX: 10,
        offsetY: 10,
        blurRadius: 10,
        spreadRadius: 10,
        color: 'fill-neutral',
      },
      backgroundColor: 'fill-neutral',
      backgroundImage: 'foo/bar',
      className: 'test-class',
    })

    const rendered = getByText(children)
    const computedStyle = window.getComputedStyle(rendered)

    expect(rendered).toHaveClass('test-class')
    expect(
      computedStyle.getPropertyValue('--b-smooth-corners-box-border-radius')
    ).toBe('10')
    expect(
      computedStyle.getPropertyValue('--b-smooth-corners-box-shadow-offset-x')
    ).toBe('10px')
    expect(
      computedStyle.getPropertyValue('--b-smooth-corners-box-shadow-offset-y')
    ).toBe('10px')
    expect(
      computedStyle.getPropertyValue(
        '--b-smooth-corners-box-shadow-blur-radius'
      )
    ).toBe('10px')
    expect(
      computedStyle.getPropertyValue(
        '--b-smooth-corners-box-shadow-spread-radius'
      )
    ).toBe('10px')
    expect(
      computedStyle.getPropertyValue('--b-smooth-corners-box-shadow-color')
    ).toBe('var(--color-fill-neutral)')
    expect(
      computedStyle.getPropertyValue('--b-smooth-corners-box-padding')
    ).toBe('20px')
    expect(
      computedStyle.getPropertyValue('--b-smooth-corners-box-margin')
    ).toBe('10px')
    expect(
      computedStyle.getPropertyValue(
        '--b-smooth-corners-box-background-color'
      )
    ).toBe('var(--color-fill-neutral)')
    expect(
      computedStyle.getPropertyValue(
        '--b-smooth-corners-box-background-image'
      )
    ).toBe('url(foo/bar)')
  })
})
