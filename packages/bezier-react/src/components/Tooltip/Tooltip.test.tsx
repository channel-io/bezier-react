import React from 'react'

import {
  isInaccessible,
  waitFor,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { render } from '~/src/utils/testUtils'

import {
  Tooltip,
  TooltipProvider,
} from './Tooltip'
import {
  type TooltipProps,
  type TooltipProviderProps,
} from './Tooltip.types'

describe('Tooltip', () => {
  const renderTooltip = ({
    children,
    ...rest
  }: TooltipProps = {}) => render(
    <Tooltip
      delayShow={0}
      {...rest}
    >
      <button type="button">
        Trigger
      </button>
    </Tooltip>,
  )

  let user: ReturnType<typeof userEvent.setup>

  beforeEach(() => {
    user = userEvent.setup()
  })

  describe('ARIA', () => {
    it('should be accessible', () => {
      const { container } = renderTooltip({ defaultShow: true, content: 'tooltip content' })
      expect(isInaccessible(container)).toBe(false)
    })

    it('The element that serves as the tooltip container has role `tooltip`.', () => {
      const { getByRole } = renderTooltip({ defaultShow: true, content: 'tooltip content' })
      expect(getByRole('tooltip')).toBeInTheDocument()
    })

    it('The element that triggers the tooltip references the tooltip element with `aria-describedby`.', () => {
      const { getByRole } = renderTooltip({ defaultShow: true, content: 'tooltip content' })
      expect(getByRole('button')).toHaveAttribute('aria-describedby', getByRole('tooltip').id)
    })
  })

  describe('User Interactions', () => {
    it('The tooltip content should be visible when hover over the trigger.', async () => {
      const { getByRole } = renderTooltip({ content: 'tooltip content' })
      await user.hover(getByRole('button'))
      expect(getByRole('tooltip')).toBeInTheDocument()
    })

    it('The tooltip content should be visible when the keyboard focuses on the trigger.', async () => {
      const { getByRole } = renderTooltip({ content: 'tooltip content' })
      await user.tab()
      expect(getByRole('tooltip')).toBeInTheDocument()
    })

    it('When the tooltip content is visible, pressing Esc should hide the tooltip content.', async () => {
      const { queryByRole } = renderTooltip({ defaultShow: true, content: 'tooltip content' })
      await user.keyboard('{Escape}')
      expect(queryByRole('tooltip')).not.toBeInTheDocument()
    })

    it('When the `allowHover` property is true, the tooltip content should be hoverable.', async () => {
      const { getByRole } = renderTooltip({ allowHover: true, content: 'tooltip content' })
      await user.hover(getByRole('button'))
      await user.hover(getByRole('tooltip'))
      expect(getByRole('tooltip')).toBeInTheDocument()
    })

    it('When the tooltip is visible, the `onShow` handler should be called.', async () => {
      const onShow = jest.fn()
      const { getByRole } = renderTooltip({ onShow, content: 'tooltip content' })
      await user.hover(getByRole('button'))
      expect(onShow).toHaveBeenCalled()
    })

    it('When the tooltip is hidden, the `onHide` handler should be called.', async () => {
      const onHide = jest.fn()
      const { getByRole } = renderTooltip({ onHide, content: 'tooltip content' })
      await user.hover(getByRole('button'))
      await user.unhover(getByRole('button'))
      expect(onHide).toHaveBeenCalled()
    })

    it('If the `content` property is undefined, the tooltip should not be visible when hovering over it or with keyboard focus.', async () => {
      const { getByRole, queryByRole } = renderTooltip({ content: undefined })
      await user.hover(getByRole('button'))
      expect(queryByRole('tooltip')).not.toBeInTheDocument()
      await user.tab()
      expect(queryByRole('tooltip')).not.toBeInTheDocument()
    })

    it('If the `content` property is null, the tooltip should not be visible when hovering over it or with keyboard focus.', async () => {
      const { getByRole, queryByRole } = renderTooltip({ content: null })
      await user.hover(getByRole('button'))
      expect(queryByRole('tooltip')).not.toBeInTheDocument()
      await user.tab()
      expect(queryByRole('tooltip')).not.toBeInTheDocument()
    })

    it('If the `content` property is empty string, the tooltip should not be visible when hovering over it or with keyboard focus.', async () => {
      const { getByRole, queryByRole } = renderTooltip({ content: '' })
      await user.hover(getByRole('button'))
      expect(queryByRole('tooltip')).not.toBeInTheDocument()
      await user.tab()
      expect(queryByRole('tooltip')).not.toBeInTheDocument()
    })

    it('If the `disabled` property is true, the tooltip should not be visible when hovering over it or with keyboard focus.', async () => {
      const { getByRole, queryByRole } = renderTooltip({ disabled: true, content: 'tooltip content' })
      await user.hover(getByRole('button'))
      expect(queryByRole('tooltip')).not.toBeInTheDocument()
      await user.tab()
      expect(queryByRole('tooltip')).not.toBeInTheDocument()
    })

    it('If the `delayShow` property is greater than 0, the tooltip should be delayed by that number of ms before appearing.', async () => {
      // NOTE: (@ed) To avoid test failure due to timing issue
      const { getByRole, queryByRole } = renderTooltip({ delayShow: 1000 - 10, content: 'tooltip content' })
      await user.hover(getByRole('button'))
      expect(queryByRole('tooltip')).not.toBeInTheDocument()
      await waitFor(() => {
        expect(queryByRole('tooltip')).toBeInTheDocument()
      }, { timeout: 1000 })
    })

    it('If the `delayHide` property is greater than 0, the tooltip should be delayed by that number of ms before disappearing.', async () => {
      // NOTE: (@ed) To avoid test failure due to timing issue
      const { getByRole, queryByRole } = renderTooltip({ delayHide: 1000 - 10, content: 'tooltip content' })
      await user.hover(getByRole('button'))
      await user.unhover(getByRole('button'))
      expect(queryByRole('tooltip')).toBeInTheDocument()
      await waitFor(() => {
        expect(queryByRole('tooltip')).not.toBeInTheDocument()
      }, { timeout: 1000 })
    })
  })
})

describe('TooltipProvider', () => {
  const renderTooltipProvider = ({
    children,
    ...rest
  }: TooltipProviderProps = {}) => render(
    <TooltipProvider
      delayShow={0}
      {...rest}
    >
      <Tooltip content="tooltip content">
        <button type="button">
          Trigger
        </button>
      </Tooltip>
    </TooltipProvider>,
  )

  let user: ReturnType<typeof userEvent.setup>

  beforeEach(() => {
    user = userEvent.setup()
  })

  describe('User Interactions', () => {
    it('If the `allowHover` property is true, the tooltip content should be hoverable.', async () => {
      const { getByRole } = renderTooltipProvider({ allowHover: true })
      await user.hover(getByRole('button'))
      await user.hover(getByRole('tooltip'))
      expect(getByRole('tooltip')).toBeInTheDocument()
    })

    it('If the `delayShow` property is greater than 0, the tooltip should be delayed by that number of ms before appearing.', async () => {
      const { getByRole, queryByRole } = renderTooltipProvider({ delayShow: 1000 })
      await user.hover(getByRole('button'))
      expect(queryByRole('tooltip')).not.toBeInTheDocument()
      await waitFor(() => {
        expect(queryByRole('tooltip')).toBeInTheDocument()
      }, { timeout: 1000 })
    })

    it('If the `delayHide` property is greater than 0, the tooltip should be delayed by that number of ms before disappearing.', async () => {
      const { getByRole, queryByRole } = renderTooltipProvider({ delayHide: 1000 })
      await user.hover(getByRole('button'))
      await user.unhover(getByRole('button'))
      expect(queryByRole('tooltip')).toBeInTheDocument()
      await waitFor(() => {
        expect(queryByRole('tooltip')).not.toBeInTheDocument()
      }, { timeout: 1000 })
    })
  })
})
