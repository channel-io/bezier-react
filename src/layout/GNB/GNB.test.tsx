/* External dependencies */
import React from 'react'
import { render } from '@testing-library/react'

/* Internal dependencies */
import GNB from './GNB'
import GNBProps from './GNB.types'

describe('GNB Test >', () => {
  let props: GNBProps

  const renderGNB = () => render(<GNB {...props} />)

  it('GNB has 68px width', () => {
    const { getByTestId } = renderGNB()
    const renderedGNB = getByTestId('gnb')

    expect(renderedGNB).toHaveStyle('width: 68px')
  })

  it('GNB has absolute position', () => {
    const { getByTestId } = renderGNB()
    const renderedGNB = getByTestId('gnb')

    expect(renderedGNB).toHaveStyle('position: absolute')
  })

  it('GNB has 100% height', () => {
    const { getByTestId } = renderGNB()
    const renderedGNB = getByTestId('gnb')

    expect(renderedGNB).toHaveStyle('height: 100%')
  })

  it('GNB has 0 left offset', () => {
    const { getByTestId } = renderGNB()
    const renderedGNB = getByTestId('gnb')

    expect(renderedGNB).toHaveStyle('left: 0')
  })
})
