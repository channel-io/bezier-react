import { render } from '~/src/utils/test'

import { HELP_TEST_ID, Help } from './Help'



describe('Help', () => {
  it('renders nothing when children are empty', () => {
    const { queryByTestId } = render(<Help />)

    expect(queryByTestId(HELP_TEST_ID)).toBeNull()
  })

  it('renders help icon when children are provided', () => {
    const { getByTestId } = render(<Help>Helpful description</Help>)

    expect(getByTestId(HELP_TEST_ID)).toBeInTheDocument()
  })
})
