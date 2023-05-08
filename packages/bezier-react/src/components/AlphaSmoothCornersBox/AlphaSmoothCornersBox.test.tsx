import React from 'react'

import { render } from '~/src/utils/testUtils'

import { AlphaSmoothCornersBox } from './AlphaSmoothCornersBox'
import { type AlphaSmoothCornersBoxProps } from './AlphaSmoothCornersBox.types'

describe('AlphaSmoothCornersBox', () => {
  const renderSmoothCornersBox = ({
    children,
    ...rest
  }: AlphaSmoothCornersBoxProps = {}) => render(
    <AlphaSmoothCornersBox {...rest}>
      { children }
    </AlphaSmoothCornersBox>,
  )

  describe('Style', () => {
    it('snapshot with default value', () => {
      const { container } = renderSmoothCornersBox()
      expect(container).toMatchSnapshot()
    })

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
          color: 'bg-black-light',
        },
        backgroundColor: 'bg-black-light',
        backgroundImage: 'foo/bar',
      })

      const rendered = getByText(children)
      const styles = window.getComputedStyle(rendered)

      expect(styles.getPropertyValue('--bezier-alpha-smooth-corners-box-border-radius')).toBe('10')
      expect(styles.getPropertyValue('--bezier-alpha-smooth-corners-box-border-radius-type')).toBe('number')
      expect(styles.getPropertyValue('--bezier-alpha-smooth-corners-box-shadow-offset-x')).toBe('10')
      expect(styles.getPropertyValue('--bezier-alpha-smooth-corners-box-shadow-offset-y')).toBe('10')
      expect(styles.getPropertyValue('--bezier-alpha-smooth-corners-box-shadow-blur-radius')).toBe('10px')
      expect(styles.getPropertyValue('--bezier-alpha-smooth-corners-box-shadow-spread-radius')).toBe('10px')
      expect(styles.getPropertyValue('--bezier-alpha-smooth-corners-box-shadow-color')).toBe('var(--bg-black-light)')
      expect(styles.getPropertyValue('--bezier-alpha-smooth-corners-box-padding')).toBe('20px')
      expect(styles.getPropertyValue('--bezier-alpha-smooth-corners-box-margin')).toBe('10px')
      expect(styles.getPropertyValue('--bezier-alpha-smooth-corners-box-background-color')).toBe('var(--bg-black-light)')
      expect(styles.getPropertyValue('--bezier-alpha-smooth-corners-box-background-image')).toBe('url(foo/bar)')
    })
  })
})
