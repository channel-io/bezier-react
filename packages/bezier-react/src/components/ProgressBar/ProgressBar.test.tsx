import { render } from '~/src/utils/test'

import { ProgressBar } from './ProgressBar'
import { type ProgressBarProps } from './ProgressBar.types'

describe('ProgressBar', () => {
  const renderComponent = (props?: Partial<ProgressBarProps>) =>
    render(<ProgressBar {...props} />)

  it('should render ProgressBar with valid aria attributes', () => {
    const { getByRole } = renderComponent({ value: 0.5 })
    const progressBar = getByRole('progressbar')
    expect(progressBar).toHaveAttribute('aria-valuemin', '0')
    expect(progressBar).toHaveAttribute('aria-valuemax', '1')
    expect(progressBar).toHaveAttribute('aria-valuenow', '0.5')
  })

  it('should render ProgressBar with given width props', () => {
    const { getByRole } = renderComponent({ width: 500 })
    const progressBar = getByRole('progressbar')
    expect(progressBar).toHaveStyle('--b-progress-bar-width: 500px')
  })
})
