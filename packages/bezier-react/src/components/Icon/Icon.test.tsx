import { AllIcon } from '@channel.io/bezier-icons'

import { render } from '~/src/utils/test'

import { ICON_TEST_ID, Icon } from './Icon'
import { type IconProps } from './Icon.types'

describe('Icon test >', () => {
  let props: IconProps

  beforeEach(() => {
    props = {
      source: AllIcon,
    }
  })

  const renderIcon = (optionProps?: IconProps) =>
    render(
      <Icon
        {...props}
        {...optionProps}
      />
    )

  it('Icon inherits fill color', () => {
    const { getByTestId } = renderIcon()

    const renderedIcon = getByTestId(ICON_TEST_ID)

    expect(renderedIcon).toHaveStyle('color: inherit;')
  })

  it('Icon receives custom color', () => {
    const { getByTestId } = renderIcon({
      source: AllIcon,
      color: 'icon-accent-olive',
    })

    const renderedIcon = getByTestId(ICON_TEST_ID)

    expect(renderedIcon).toHaveStyle(
      '--b-icon-color: var(--beta-color-icon-accent-olive);'
    )
  })
})
