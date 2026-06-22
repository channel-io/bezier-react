import userEvent from '@testing-library/user-event'

import { render } from '~/src/utils/test'

import {
  SLIDER_TEST_ID,
  Slider,
} from './Slider'

describe('Slider', () => {
  it('should render slider role', () => {
    const { getByRole } = render(<Slider defaultValue={[5]} />)

    expect(getByRole('slider')).toBeInTheDocument()
  })

  it('should be disabled when disabled prop is true', () => {
    const { getByTestId } = render(<Slider disabled />)

    expect(getByTestId(SLIDER_TEST_ID)).toHaveAttribute('data-disabled')
  })

  it('should call onValueChange when value changes with keyboard', async () => {
    const user = userEvent.setup()
    const onValueChange = jest.fn()
    const { getByRole } = render(
      <Slider
        defaultValue={[5]}
        onValueChange={onValueChange}
      />
    )

    await user.tab()
    expect(getByRole('slider')).toHaveFocus()

    await user.keyboard('{ArrowRight}')
    expect(onValueChange).toHaveBeenCalled()
  })
})
