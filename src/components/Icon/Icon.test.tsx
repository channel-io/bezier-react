/* External dependencies */
import React from 'react'
import { render } from '@testing-library/react'

/* Internal dependencies */
import Icon, { ICON_TEST_ID } from './Icon'
import IconProps from './Icon.types'

describe('Icon test >', () => {
  let props: IconProps

  beforeEach(() => {
    props = {
      name: 'all',
    }
  })

  const renderIcon = (optionProps?: IconProps) => render(<Icon {...props} {...optionProps}/>)

  it('Icon inherits fill color', () => {
    const { getByTestId } = renderIcon()

    const renderedIcon = getByTestId(ICON_TEST_ID)

    expect(renderedIcon).toHaveStyle('color: inherit;')
  })

  it('Icon receives custom color', () => {
    const { getByTestId } = renderIcon({ name: 'all', color: 'rgb(20, 30, 50)' })

    const renderedIcon = getByTestId(ICON_TEST_ID)

    expect(renderedIcon).toHaveStyle('color: rgb(20, 30, 50);')
  })
})
