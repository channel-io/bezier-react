import { CheckIcon } from '@channel.io/bezier-icons'
import { isInaccessible, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { render } from '~/src/utils/test'

import { Tooltip } from './Tooltip'
import type { TooltipPosition, TooltipProps } from './Tooltip.types'

const placementTestCases: {
  placement: TooltipPosition
}[] = [
  { placement: 'top-center' },
  { placement: 'top-left' },
  { placement: 'top-right' },
  { placement: 'right-center' },
  { placement: 'right-top' },
  { placement: 'right-bottom' },
  { placement: 'bottom-center' },
  { placement: 'bottom-left' },
  { placement: 'bottom-right' },
  { placement: 'left-center' },
  { placement: 'left-top' },
  { placement: 'left-bottom' },
]

describe('Tooltip', () => {
  const renderTooltip = ({ children, ...rest }: TooltipProps = {}) =>
    render(
      <Tooltip
        delayShow={0}
        {...rest}
      >
        {children ?? <button type="button">Trigger</button>}
      </Tooltip>
    )

  it('renders accessible tooltip content', () => {
    const { container, getByRole } = renderTooltip({
      defaultShow: true,
      content: 'Tooltip content',
    })

    expect(isInaccessible(container)).toBe(false)
    expect(getByRole('tooltip')).toHaveTextContent('Tooltip content')
  })

  it('renders optional title, description, icon, and custom class name', () => {
    const { getAllByText, getByRole } = renderTooltip({
      defaultShow: true,
      title: 'Tooltip title',
      content: 'Tooltip content',
      description: 'Tooltip description',
      icon: CheckIcon,
      className: 'custom-tooltip',
    })

    const tooltip = getByRole('tooltip')

    expect(document.querySelector('.custom-tooltip')).toBeInTheDocument()
    expect(getAllByText('Tooltip title')).toHaveLength(2)
    expect(getAllByText('Tooltip content')).toHaveLength(2)
    expect(getAllByText('Tooltip description')).toHaveLength(2)
    expect(tooltip.querySelector('svg')).toBeInTheDocument()
  })

  it('connects trigger and tooltip with aria-describedby', () => {
    const { getByRole } = renderTooltip({
      defaultShow: true,
      content: 'Tooltip content',
    })

    expect(getByRole('button')).toHaveAttribute(
      'aria-describedby',
      getByRole('tooltip').id
    )
  })

  it('calls show and hide handlers from trigger interaction', async () => {
    const user = userEvent.setup()
    const onShow = jest.fn()
    const onHide = jest.fn()

    const { getByRole } = renderTooltip({
      content: 'Tooltip content',
      onShow,
      onHide,
    })

    await user.hover(getByRole('button'))
    await user.unhover(getByRole('button'))

    expect(onShow).toHaveBeenCalled()
    expect(onHide).toHaveBeenCalled()
  })

  it('delays hide handler when delayHide is provided', async () => {
    const user = userEvent.setup()
    const onHide = jest.fn()

    const { getByRole } = renderTooltip({
      content: 'Tooltip content',
      delayHide: 10,
      onHide,
    })

    await user.hover(getByRole('button'))
    await user.unhover(getByRole('button'))

    expect(onHide).not.toHaveBeenCalled()

    await user.hover(getByRole('button'))
    await user.unhover(getByRole('button'))

    await waitFor(() => {
      expect(onHide).toHaveBeenCalled()
    })
  })

  it.each(placementTestCases)(
    'renders tooltip with $placement placement',
    ({ placement }) => {
      const { getByRole } = renderTooltip({
        defaultShow: true,
        content: 'Tooltip content',
        placement,
      })

      expect(getByRole('tooltip')).toHaveTextContent('Tooltip content')
    }
  )

  it('uses fallback side and align when placement is unknown', () => {
    const { getByRole } = renderTooltip({
      defaultShow: true,
      content: 'Tooltip content',
      placement: 'unknown' as TooltipPosition,
    })

    expect(getByRole('tooltip')).toHaveTextContent('Tooltip content')
  })

  it('does not show tooltip when content is empty', async () => {
    const user = userEvent.setup()

    const { getByRole, queryByRole } = renderTooltip({
      content: '',
    })

    await user.hover(getByRole('button'))

    expect(queryByRole('tooltip')).not.toBeInTheDocument()
  })

  it('does not show tooltip when disabled', async () => {
    const user = userEvent.setup()

    const { getByRole, queryByRole } = renderTooltip({
      disabled: true,
      content: 'Tooltip content',
    })

    await user.hover(getByRole('button'))

    expect(queryByRole('tooltip')).not.toBeInTheDocument()
  })
})
