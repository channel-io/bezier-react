import { render } from '~/src/utils/test'

import { SmoothCornersBox } from './SmoothCornersBox'
import { type SmoothCornersBoxProps } from './SmoothCornersBox.types'

describe('SmoothCornersBox', () => {
  const renderSmoothCornersBox = (
    { children, ...rest }: SmoothCornersBoxProps = { borderRadius: 0 }
  ) => render(<SmoothCornersBox {...rest}>{children}</SmoothCornersBox>)

  describe('Style', () => {
    it('each style property must have the correct unit.', () => {
      const children = 'foo'
      const { getByText } = renderSmoothCornersBox({
        children,
        borderRadius: 10,
        margin: 10,
        shadow: {
          offsetX: 10,
          offsetY: 10,
          blurRadius: 10,
          spreadRadius: 10,
          color: 'fill-neutral-light',
        },
        backgroundColor: 'fill-neutral-light',
        backgroundImage: 'foo/bar',
      })

      const rendered = getByText(children)
      const styles = window.getComputedStyle(rendered)

      expect(
        styles.getPropertyValue('--b-smooth-corners-box-border-radius')
      ).toBe('10')
      expect(
        styles.getPropertyValue('--b-smooth-corners-box-shadow-offset-x')
      ).toBe('10px')
      expect(
        styles.getPropertyValue('--b-smooth-corners-box-shadow-offset-y')
      ).toBe('10px')
      expect(
        styles.getPropertyValue('--b-smooth-corners-box-shadow-blur-radius')
      ).toBe('10px')
      expect(
        styles.getPropertyValue('--b-smooth-corners-box-shadow-spread-radius')
      ).toBe('10px')
      expect(
        styles.getPropertyValue('--b-smooth-corners-box-shadow-color')
      ).toBe('var(--color-fill-neutral-light)')
      expect(styles.getPropertyValue('--b-smooth-corners-box-padding')).toBe(
        '20px'
      )
      expect(styles.getPropertyValue('--b-smooth-corners-box-margin')).toBe(
        '10px'
      )
      expect(
        styles.getPropertyValue('--b-smooth-corners-box-background-color')
      ).toBe('var(--color-fill-neutral-light)')
      expect(
        styles.getPropertyValue('--b-smooth-corners-box-background-image')
      ).toBe('url(foo/bar)')
    })
  })
})
