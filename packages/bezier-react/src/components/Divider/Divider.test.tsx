import { render } from '~/src/utils/test'

import { Divider } from './Divider'
import { type DividerProps } from './Divider.types'

import styles from './Divider.module.scss'

describe('Divider', () => {
  const renderDivider = (props?: Partial<DividerProps>) =>
    render(<Divider {...props} />)

  describe('no props specified', () => {
    it('should render default Divider', () => {
      const { getByRole } = renderDivider()
      const divider = getByRole('separator')
      expect(divider).toHaveClass(styles.Divider)
      expect(divider).toHaveAttribute('role', 'separator')
    })
  })

  describe('accessibility', () => {
    it('should render with an separator role', () => {
      const { getByRole } = renderDivider()
      const divider = getByRole('separator')

      expect(divider).toHaveAttribute('role', 'separator')
    })

    it('should render horizontal divider without aria-orientation attribute', () => {
      const { getByRole } = renderDivider({
        orientation: 'horizontal',
      })
      const divider = getByRole('separator')

      expect(divider).not.toHaveAttribute('aria-orientation')
    })

    it('should render vertical divider with aria-orientation attribute', () => {
      const { getByRole } = renderDivider({
        orientation: 'vertical',
      })
      const divider = getByRole('separator')

      expect(divider).toHaveAttribute('aria-orientation', 'vertical')
    })

    it('should not have aria attributes when decorative is true', () => {
      const { getByRole } = renderDivider({
        decorative: true,
      })
      const divider = getByRole('separator')

      expect(divider).not.toHaveAttribute('aria-orientation')
    })
  })
})
