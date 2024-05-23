import React from 'react'

import { render } from '~/src/utils/test'

import { SPINNER_TEST_ID, Spinner } from './Spinner'

describe('Spinner >', () => {
  const renderSpinner = (props?: React.ComponentProps<typeof Spinner>) =>
    render(<Spinner {...props} />)

  it('should render', () => {
    const { getByTestId } = renderSpinner()
    const renderedSpinner = getByTestId(SPINNER_TEST_ID)
    expect(renderedSpinner).toBeInTheDocument()
  })

  it('should render as a div by default', () => {
    const { getByTestId } = renderSpinner()
    const renderedSpinner = getByTestId(SPINNER_TEST_ID)
    expect(renderedSpinner.tagName).toBe('SPAN')
  })

  it('should forward ref', () => {
    const ref = React.createRef<HTMLDivElement>()
    renderSpinner({ ref })
    expect(ref.current).toBeInTheDocument()
  })

  it('should receive size', () => {
    const { getByTestId } = renderSpinner({ size: 'm' })
    const renderedSpinner = getByTestId(SPINNER_TEST_ID)
    expect(renderedSpinner).toHaveClass('size-m')
  })
})
