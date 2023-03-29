/* External dependencies */
import React from 'react'
import { act } from '@testing-library/react'

/* Internal dependencies */
import {
  css,
  TransitionDuration,
} from '~/src/foundation'
import { render } from '~/src/utils/testUtils'
import { noop } from '~/src/utils/functionUtils'
import {
  type ToastControllerProps,
  ToastPlacement,
} from './Toast.types'
import ToastElement from './ToastElement'
import ToastController from './ToastController'

describe('ToastController >', () => {
  let props: ToastControllerProps

  beforeEach(() => {
    props = {
      autoDismiss: true,
      autoDismissTimeout: 5000,
      transitionDuration: TransitionDuration.M,
      content: 'Test Toast',
      onDismiss: noop,
      transform: css``,
      placement: ToastPlacement.BottomLeft,
      component: ToastElement,
    }
  })

  const renderToastController = (optionProps?: Partial<ToastControllerProps>) => render(
    <ToastController {...props} {...optionProps} />,
  )

  describe('Props >', () => {
    describe('autoDismiss', () => {
      beforeEach(() => {
        jest.useFakeTimers()
        jest.spyOn(global, 'setTimeout')
      })

      it('autoDismiss is on', () => {
        const autoDismissTimeout = 5000
        renderToastController({
          autoDismissTimeout,
        })
        expect(setTimeout).toHaveBeenCalledTimes(1)
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), TransitionDuration.M)
        act(() => {
          jest.runOnlyPendingTimers()
        })
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), autoDismissTimeout)
      })

      it('autoDismiss is off', () => {
        renderToastController({
          autoDismiss: false,
        })
        expect(setTimeout).toHaveBeenCalledTimes(0)
      })
    })

    describe('onDismiss >', () => {
      beforeEach(() => {
        jest.useFakeTimers()
        jest.spyOn(global, 'setTimeout')
      })

      it('onDismiss is called automatically', () => {
        const onDismiss = jest.fn()
        renderToastController({
          onDismiss,
        })
        expect(onDismiss).not.toBeCalled()
        act(() => {
          jest.runAllTimers()
        })
        expect(onDismiss).toBeCalledTimes(1)
      })
    })

    describe('version >', () => {
      beforeEach(() => {
        jest.useFakeTimers()
        jest.spyOn(global, 'setTimeout')
        jest.spyOn(global, 'clearTimeout')
      })

      it('autoDismiss reinitialized, when version is changed', () => {
        const onDismiss = jest.fn()
        const { rerender } = render((
          <ToastController
            {...props}
            onDismiss={onDismiss}
            autoDismiss
          />
        ))
        expect(clearTimeout).toHaveBeenCalledTimes(0)
        rerender((
          <ToastController
            {...props}
            onDismiss={onDismiss}
            autoDismiss={false}
            version={1}
          />
        ))
        // unmount + reinitialize = 2
        expect(clearTimeout).toHaveBeenCalledTimes(2)
      })
    })
  })
})
