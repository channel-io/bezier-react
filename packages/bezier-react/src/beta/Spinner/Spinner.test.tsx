import * as React from 'react'


import { colorTokenCssVar } from '~/src/utils/style'
import { render } from '~/src/utils/test'

import { Spinner } from './Spinner'
import { type SpinnerProps } from './Spinner.types'

import styles from './Spinner.module.scss'


describe('Spinner', () => {
  const renderSpinner = (props?: SpinnerProps) => render(<Spinner {...props} />)

  it('should render loading status by default', () => {
    const { getByRole } = renderSpinner()
    const spinner = getByRole('status', { name: 'Loading' })

    expect(spinner).toHaveClass(styles.Spinner)
    expect(spinner).toHaveClass(styles['size-20'])
    expect(spinner).toHaveStyle(
      `--b-beta-spinner-color: ${colorTokenCssVar('icon-neutral')}`
    )
  })

  it('should allow overriding accessibility status', () => {
    const { getByRole } = renderSpinner({
      role: 'progressbar',
      'aria-label': 'Submitting',
    })

    expect(getByRole('progressbar', { name: 'Submitting' })).toBeInTheDocument()
  })

  it('should forward ref', () => {
    const ref = React.createRef<HTMLDivElement>()

    render(<Spinner ref={ref} />)

    expect(ref.current).toBeInTheDocument()
  })

  it('should receive style and class name', () => {
    const { getByRole } = renderSpinner({
      style: { color: 'red' },
      className: 'test-class',
    })
    const spinner = getByRole('status')

    expect(spinner).toHaveStyle('color: red')
    expect(spinner).toHaveClass('test-class')
  })

  it('should receive color and size', () => {
    const { getByRole } = renderSpinner({
      color: 'icon-neutral-heavier',
      size: '48',
    })
    const spinner = getByRole('status')

    expect(spinner).toHaveClass(styles['size-48'])
    expect(spinner).toHaveStyle(
      `--b-beta-spinner-color: ${colorTokenCssVar('icon-neutral-heavier')}`
    )
  })
})
