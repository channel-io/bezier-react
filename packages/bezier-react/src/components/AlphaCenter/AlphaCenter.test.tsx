import React from 'react'

import { render } from '~/src/utils/testUtils'

import { AlphaCenter } from './AlphaCenter'
import { type AlphaCenterProps } from './AlphaCenter.types'

const CONTENT = 'Centered content'

describe('AlphaCenter', () => {
  const renderComponent = ({ children, ...rest }: AlphaCenterProps) => render(
    <AlphaCenter {...rest}>{ children }</AlphaCenter>,
  )

  it('should have a centered style', () => {
    const { getByText } = renderComponent({ children: CONTENT })
    const rendered = getByText(CONTENT)

    expect(rendered).toHaveStyle('display: flex')
    expect(rendered).toHaveStyle('align-items: center')
    expect(rendered).toHaveStyle('justify-content: center')
  })
})
