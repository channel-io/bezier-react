import React from 'react'

import { render } from '~/src/utils/test'

import { LOADER_TEST_ID, Loader } from './Loader'

describe('Loader >', () => {
  const renderLoader = (props?: React.ComponentProps<typeof Loader>) =>
    render(<Loader {...props} />)

  it('should render', () => {
    const { getByTestId } = renderLoader()
    const renderedLoader = getByTestId(LOADER_TEST_ID)
    expect(renderedLoader).toBeInTheDocument()
  })

  it('should render as a span element by default', () => {
    const { getByTestId } = renderLoader()
    const renderedLoader = getByTestId(LOADER_TEST_ID)
    expect(renderedLoader.tagName).toBe('SPAN')
  })

  it('should forward ref', () => {
    const ref = React.createRef<HTMLDivElement>()
    renderLoader({ ref })
    expect(ref.current).toBeInTheDocument()
  })

  it('should receive size', () => {
    const { getByTestId } = renderLoader({ size: 'm' })
    const renderedLoader = getByTestId(LOADER_TEST_ID)
    expect(renderedLoader).toHaveClass('size-m')
  })
})
