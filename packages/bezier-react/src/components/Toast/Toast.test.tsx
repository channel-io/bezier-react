import { fireEvent, waitFor } from '@testing-library/react'

import { render } from '~/src/utils/test'

import { Toast } from './Toast'
import { type ToastProps } from './Toast.types'

import styles from './Toast.module.scss'

describe('Toast', () => {
  const renderToast = (props?: Partial<ToastProps>) =>
    render(<Toast {...props} />)

  describe('onDismiss', () => {
    it('should be called when the animation ends after clicking the Cancel button', () => {
      const onDismiss = jest.fn()
      const { getByRole } = renderToast({ onDismiss, autoDismiss: false })
      const toast = getByRole('status')
      const closeButton = getByRole('button')
      closeButton.click()
      expect(onDismiss).not.toHaveBeenCalled()
      const animationEndEvent = new Event('animationend', {
        bubbles: true,
        cancelable: true,
      }) as AnimationEvent
      // @ts-ignore
      animationEndEvent.animationName = styles['slide-out-left']
      fireEvent(toast, animationEndEvent)
      expect(onDismiss).toHaveBeenCalledTimes(1)
    })

    it('should be called automatically if autoDismiss prop is true', async () => {
      const onDismiss = jest.fn()
      const { getByRole } = renderToast({ onDismiss, autoDismissTimeout: 10 })
      const toast = getByRole('status')
      expect(onDismiss).not.toHaveBeenCalled()
      const animationEndEvent = new Event('animationend', {
        bubbles: true,
        cancelable: true,
      }) as AnimationEvent
      // @ts-ignore
      animationEndEvent.animationName = styles['slide-out-left']
      fireEvent(toast, animationEndEvent)
      expect(onDismiss).toHaveBeenCalledTimes(1)
    })
  })

  describe('content', () => {
    it('can be a string', () => {
      const onDismiss = jest.fn()
      const { getByText } = renderToast({
        onDismiss,
        content: 'Hello',
      })
      const content = getByText('Hello')
      expect(content).toBeInTheDocument()
      expect(content.childNodes.length).toBe(1)
    })

    it('can be a string with \n', () => {
      const onDismiss = jest.fn()
      const { getByText } = renderToast({
        onDismiss,
        content: 'Hello\nChannelTalk',
      })
      const content = getByText(/Hello.+/).parentNode as ParentNode
      expect(content).toBeInTheDocument()
    })

    it('can be a ReactNode', () => {
      const onDismiss = jest.fn()
      const { getByText } = renderToast({
        onDismiss,
        content: <button type="button">Hello</button>,
      })
      const content = getByText('Hello')
      expect(content).toBeInTheDocument()
      expect(content).toBeInstanceOf(HTMLButtonElement)
    })
  })

  describe('autoDismiss', () => {
    it('should work if the option is on', async () => {
      const { getByRole, queryByRole } = renderToast({
        autoDismiss: true,
        autoDismissTimeout: 0,
      })
      expect(getByRole('status')).toBeInTheDocument()
      await waitFor(
        () => {
          expect(queryByRole('status')).not.toBeInTheDocument()
        },
        { timeout: 1000 }
      )
    })

    it('should not work if the option is on', async () => {
      const { getByRole, queryByRole } = renderToast({ autoDismiss: false })
      expect(getByRole('status')).toBeInTheDocument()
      await waitFor(
        () => {
          expect(queryByRole('status')).toBeInTheDocument()
        },
        { timeout: 1000 }
      )
    })
  })
})
