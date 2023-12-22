import React from 'react'

import { render } from '~/src/utils/test'

import { Center } from './Center'
import { type CenterProps } from './Center.types'

import styles from './Center.module.scss'

const CONTENT = 'Centered content'

describe('Center', () => {
  const renderComponent = ({ children, ...rest }: CenterProps) => render(
    <Center {...rest}>{ children }</Center>,
  )

  it('should have a centered style', () => {
    const { getByText } = renderComponent({ children: CONTENT })
    const rendered = getByText(CONTENT)

    expect(rendered).toHaveClass(styles.Center)
  })
})
