/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { LightFoundation } from 'Foundation'
import { render } from 'Utils/testUtils'
import BaseIcon, { ICON_TEST_ID } from './BaseIcon'
import { LegacyIconProps as IconProps } from './legacy'

describe('Icon test >', () => {
  let props: IconProps

  beforeEach(() => {
    props = {
      name: 'all',
    }
  })

  const renderIcon = (optionProps?: IconProps) => render(
    <BaseIcon {...props} {...optionProps} />,
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
