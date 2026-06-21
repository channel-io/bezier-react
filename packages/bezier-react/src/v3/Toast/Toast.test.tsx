import { useRef } from 'react'

import { CheckIcon } from '@channel.io/bezier-icons'
import { fireEvent, screen, waitFor } from '@testing-library/react'

import { colorTokenCssVar } from '~/src/utils/style'
import { render } from '~/src/utils/test'

import { Toast, ToastProvider, useToast } from './Toast'
import { type ToastProps } from './Toast.types'

import styles from './Toast.module.scss'

describe('Toast', () => {
  const renderToast = (props?: Partial<ToastProps>) =>
    render(<Toast {...props} />)

  describe('preset', () => {
    it.each([
      ['info', 'icon-neutral-heavy'],
      ['success', 'icon-accent-green'],
      ['error', 'icon-accent-red'],
    ] as const)('renders %s preset with fixed icon color', (preset, color) => {
      const { getByRole } = renderToast({
        preset,
        content: 'Hello',
        autoDismiss: false,
      })

      expect(getByRole('status').querySelector('svg')).toHaveStyle(
        `--b-v3-icon-color: ${colorTokenCssVar(color)}`
      )
    })

    it('keeps preset icon color when icon is overridden', () => {
      const { getByRole } = renderToast({
        preset: 'success',
        icon: CheckIcon,
        content: 'Hello',
        autoDismiss: false,
      })

      expect(getByRole('status').querySelector('svg')).toHaveStyle(
        `--b-v3-icon-color: ${colorTokenCssVar('icon-accent-green')}`
      )
    })
  })

  describe('onDismiss', () => {
    it('is called when the animation ends after clicking the close button', () => {
      const onDismiss = jest.fn()
      const { getByRole } = renderToast({
        onDismiss,
        autoDismiss: false,
        content: 'Hello',
      })
      const toast = getByRole('status')
      const closeButton = getByRole('button', { name: 'Close toast' })

      fireEvent.click(closeButton)

      expect(onDismiss).not.toHaveBeenCalled()

      const animationEndEvent = new Event('animationend', {
        bubbles: true,
        cancelable: true,
      }) as AnimationEvent

      Object.defineProperty(animationEndEvent, 'animationName', {
        value: styles['slide-out-left'],
      })
      fireEvent(toast, animationEndEvent)

      expect(onDismiss).toHaveBeenCalledTimes(1)
    })
  })

  describe('content', () => {
    it('can be a string', () => {
      const { getByText } = renderToast({
        content: 'Hello',
        autoDismiss: false,
      })

      const content = getByText('Hello')

      expect(content).toBeInTheDocument()
      expect(content.childNodes.length).toBe(1)
    })

    it('can be a string with line breaks', () => {
      const { getByText } = renderToast({
        content: 'Hello\nChannelTalk',
        autoDismiss: false,
      })

      const content = getByText(/Hello.+/).parentNode as ParentNode

      expect(content).toBeInTheDocument()
    })

    it('can be a ReactNode', () => {
      const { getByText } = renderToast({
        content: <button type="button">Hello</button>,
        autoDismiss: false,
      })

      const content = getByText('Hello')

      expect(content).toBeInTheDocument()
      expect(content).toBeInstanceOf(HTMLButtonElement)
    })
  })

  describe('autoDismiss', () => {
    it('works if the option is on', async () => {
      const { getByRole, queryByRole } = renderToast({
        autoDismiss: true,
        autoDismissTimeout: 0,
        content: 'Hello',
      })

      expect(getByRole('status')).toBeInTheDocument()

      await waitFor(
        () => {
          expect(queryByRole('status')).not.toBeInTheDocument()
        },
        { timeout: 1000 }
      )
    })

    it('does not work if the option is off', async () => {
      const { getByRole, queryByRole } = renderToast({
        autoDismiss: false,
        content: 'Hello',
      })

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

describe('ToastProvider', () => {
  function ToastTrigger({ rightSide = false }: { rightSide?: boolean }) {
    const toast = useToast()
    const toastIdRef = useRef('')

    return (
      <>
        <button
          type="button"
          onClick={() => {
            toastIdRef.current = toast.addToast('Provider toast', {
              rightSide,
              autoDismiss: false,
            })
          }}
        >
          Add toast
        </button>
        <button
          type="button"
          onClick={() => {
            toast.updateToast(toastIdRef.current, 'Updated toast', {
              rightSide,
              autoDismiss: false,
            })
          }}
        >
          Update toast
        </button>
        <button
          type="button"
          onClick={() => {
            toast.removeAllToasts()
          }}
        >
          Remove all toasts
        </button>
      </>
    )
  }

  it('adds, updates, and removes a left toast', async () => {
    const { getByRole } = render(
      <ToastProvider>
        <ToastTrigger />
      </ToastProvider>
    )

    fireEvent.click(getByRole('button', { name: 'Add toast' }))

    expect(await screen.findByRole('status')).toHaveTextContent(
      'Provider toast'
    )

    fireEvent.click(getByRole('button', { name: 'Update toast' }))

    expect(await screen.findByRole('status')).toHaveTextContent(
      'Updated toast'
    )

    fireEvent.click(getByRole('button', { name: 'Remove all toasts' }))

    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('adds a right toast', async () => {
    const { getByRole } = render(
      <ToastProvider>
        <ToastTrigger rightSide />
      </ToastProvider>
    )

    fireEvent.click(getByRole('button', { name: 'Add toast' }))

    expect(await screen.findByRole('status')).toHaveTextContent(
      'Provider toast'
    )
  })
})
