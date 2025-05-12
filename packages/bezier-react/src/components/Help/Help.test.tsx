import { render } from '~/src/utils/test'

import { HELP_TEST_ID, Help } from './Help'
import { type HelpProps } from './Help.types'

describe('Help >', () => {
  let props: HelpProps

  beforeEach(() => {
    props = {
      children: 'Lorem ipsum',
    }
  })

  const renderComponent = (otherProps?: Partial<HelpProps>) =>
    render(
      <Help
        {...props}
        {...otherProps}
      />
    )

  it('renders nothing when children prop is empty', () => {
    const { queryByTestId } = renderComponent({ children: '' })
    const rendered = queryByTestId(HELP_TEST_ID)

    expect(rendered).toBeNull()
  })
})
