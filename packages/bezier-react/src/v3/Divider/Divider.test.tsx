import { render } from '~/src/utils/test'

import { Divider } from './Divider'
import { type DividerProps } from './Divider.types'

import styles from './Divider.module.scss'

describe('Divider', () => {
  const renderDivider = (props?: Partial<DividerProps>) =>
    render(<Divider {...props} />)

  it('should render default Divider', () => {
    const { getByRole } = renderDivider()
    const divider = getByRole('separator')

    expect(divider).toHaveClass(styles.Divider)
    expect(divider).toHaveClass(styles.horizontal)
  })

  it('should render vertical divider with aria-orientation attribute', () => {
    const { getByRole } = renderDivider({ orientation: 'vertical' })
    const divider = getByRole('separator')

    expect(divider).toHaveClass(styles.vertical)
    expect(divider).toHaveAttribute('aria-orientation', 'vertical')
  })

  it('should receive indent styles', () => {
    const { getByRole } = renderDivider({
      withoutIndent: true,
      withoutParallelIndent: true,
      withoutSideIndent: true,
    })
    const divider = getByRole('separator')

    expect(divider).toHaveClass(styles['without-indent'])
    expect(divider).toHaveClass(styles['without-parallel-indent'])
    expect(divider).toHaveClass(styles['without-side-indent'])
  })

  it('should not have aria attributes when decorative is true', () => {
    const { getByRole } = renderDivider({ decorative: true })
    const divider = getByRole('separator')

    expect(divider).not.toHaveAttribute('aria-orientation')
  })
})
