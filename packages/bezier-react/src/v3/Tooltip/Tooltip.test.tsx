import { isInaccessible } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { render } from '~/src/utils/test'

import { Tooltip } from './Tooltip'
import type { TooltipProps } from './Tooltip.types'

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
