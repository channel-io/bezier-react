import React from 'react'

import { render } from '~/src/utils/test'

import Spinner, { SPINNER_TEST_ID } from './Spinner'
import { SpinnerSize } from './Spinner.types'

describe('Spinner >', () => {
  const renderSpinner = (props?: React.ComponentProps<typeof Spinner>) => render(
    <Spinner {...props} />,
  )

  it('should render', () => {
    const { getByTestId } = renderSpinner()
    const renderedSpinner = getByTestId(SPINNER_TEST_ID)
    expect(renderedSpinner).toBeInTheDocument()
  })

  it('should render as a div by default', () => {
    const { getByTestId } = renderSpinner()
    const renderedSpinner = getByTestId(SPINNER_TEST_ID)
    expect(renderedSpinner.tagName).toBe('DIV')
  })

  it('should render as a different element depending on `as` prop', () => {
    const { getByTestId } = renderSpinner({ as: 'span' })
    const renderedSpinner = getByTestId(SPINNER_TEST_ID)
    expect(renderedSpinner.tagName).toBe('SPAN')
  })

  it('should forward ref', () => {
    const ref = React.createRef<HTMLDivElement>()
    renderSpinner({ ref })
    expect(ref.current).toBeInTheDocument()
  })

  it('should receive style', () => {
    const { getByTestId } = renderSpinner({ style: { color: 'red' } })
    const renderedSpinner = getByTestId(SPINNER_TEST_ID)
    expect(renderedSpinner).toHaveStyle('color: red')
  })

  it('should receive class name', () => {
    const { getByTestId } = renderSpinner({ className: 'test-class' })
    const renderedSpinner = getByTestId(SPINNER_TEST_ID)
    expect(renderedSpinner).toHaveClass('test-class')
  })

  it('should recieve color', () => {
    const color = 'bg-black-lighter'
    const { getByTestId } = renderSpinner({ color })
    const renderedSpinner = getByTestId(SPINNER_TEST_ID)
    expect(renderedSpinner).toHaveStyle(`--bezier-spinner-color: var(--${color})`)
  })

  it('should receive size', () => {
    const { getByTestId } = renderSpinner({ size: SpinnerSize.M })
    const renderedSpinner = getByTestId(SPINNER_TEST_ID)
    expect(renderedSpinner).toHaveClass(SpinnerSize.M)
  })
})
