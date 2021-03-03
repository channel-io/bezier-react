/* External dependencies */
import React from 'react'
import { render } from '@testing-library/react'

/* Internal dependencies */
import { FoundationProvider, LightFoundation } from '../../foundation'
import Icon, { ICON_TEST_ID } from './Icon'
import IconProps from './Icon.types'

describe('Icon test >', () => {
  let props: IconProps

  beforeEach(() => {
    props = {
      name: 'all',
    }
  })

  const renderIcon = (optionProps?: IconProps) => render(
    <FoundationProvider foundation={LightFoundation}>
      <Icon {...props} {...optionProps}/>
    </FoundationProvider>,
  )

  it('Icon inherits fill color', () => {
    const { getByTestId } = renderIcon()

    const renderedIcon = getByTestId(ICON_TEST_ID)

    expect(renderedIcon).toHaveStyle('color: inherit;')
  })

  it('Icon receives custom color Theme Key', () => {
    const { getByTestId } = renderIcon({ name: 'all', color: 'bgtxt-olive-dark' })

    const renderedIcon = getByTestId(ICON_TEST_ID)

    expect(renderedIcon).toHaveStyle(`color: ${LightFoundation.theme['bgtxt-olive-dark']};`)
  })
})
