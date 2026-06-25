import { render } from '~/src/utils/test'

import {
  PROGRESS_BAR_TEST_ID,
  ProgressBar,
} from './ProgressBar'



describe('ProgressBar', () => {
  it('should render progressbar role', () => {
    const { getByRole } = render(<ProgressBar value={0.5} />)

    expect(getByRole('progressbar')).toBeInTheDocument()
  })

  it('should clamp value to valid aria-valuenow range', () => {
    const { getByRole, rerender } = render(<ProgressBar value={2} />)

    expect(getByRole('progressbar')).toHaveAttribute('aria-valuenow', '1')

    rerender(<ProgressBar value={-1} />)
    expect(getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0')
  })

  it('should set width with custom property', () => {
    const { getByTestId } = render(<ProgressBar width={200} />)

    expect(getByTestId(PROGRESS_BAR_TEST_ID)).toHaveStyle({
      '--b-beta-progress-bar-width': '200px',
    })
  })
})
