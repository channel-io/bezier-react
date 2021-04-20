/* External dependencies */
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { noop } from 'lodash-es'

/* Internal dependencies */
import ToastContext from '../../contexts/ToastContext'
import { TransitionDuration } from '../../foundation'
import { rootElement } from '../../utils/domUtils'
import {
  OnDismissCallback,
  defaultOptions,
  ToastOptions,
  ToastPlacement,
  ToastId,
  ToastProviderProps,
  ToastType,
} from './Toast.types'
import ToastContainer from './ToastContainer'
import ToastController from './ToastController'
import ToastElement from './ToastElement'
import ToastService from './ToastService'

const { Consumer, Provider } = ToastContext

function ToastProvider({
  autoDismissTimeout = 5000,
  children = [],
}: ToastProviderProps) {
  const leftToastService = useMemo(() => new ToastService(), [])
  const rightToastService = useMemo(() => new ToastService(), [])
  const [leftToasts, setLeftToasts] = useState<ToastType[]>([])
  const [rightToasts, setRightToasts] = useState<ToastType[]>([])

  const add = useCallback((content: string, options: ToastOptions = defaultOptions) => {
    let result = ''
    if (options.rightSide) {
      result = rightToastService.add(content, options)
      setRightToasts(rightToastService.getToasts())
    } else {
      result = leftToastService.add(content, options)
      setLeftToasts(leftToastService.getToasts())
    }
    return result
  }, [
    leftToastService,
    rightToastService,
  ])

  const remove = useCallback((id: ToastId) => {
    leftToastService.remove(id)
    rightToastService.remove(id)
    setLeftToasts(leftToastService.getToasts())
    setRightToasts(rightToastService.getToasts())
  }, [
    leftToastService,
    rightToastService,
  ])

  const removeAll = useCallback(() => {
    leftToastService.removeAll()
    rightToastService.removeAll()
    setLeftToasts(leftToastService.getToasts())
    setRightToasts(rightToastService.getToasts())
  }, [
    leftToastService,
    rightToastService,
  ])

  const handleDismiss = useCallback((id: ToastId, callback: OnDismissCallback = noop) => {
    callback(id)
    remove(id)
  }, [remove])

  useEffect(() => {
    setLeftToasts(leftToastService.getToasts())
    setRightToasts(rightToastService.getToasts())
  }, [
    leftToastService,
    rightToastService,
  ])

  const ToastContextValue = useMemo(() => ({
    add,
    remove,
    removeAll,
    leftToasts,
    rightToasts,
  }), [
    add,
    remove,
    removeAll,
    leftToasts,
    rightToasts,
  ])

  const hasToasts = useMemo(() => Boolean(leftToasts.length), [leftToasts.length])

  const createContainer = useCallback((placement: ToastPlacement, toasts: ToastType[]) => (
    <ToastContainer placement={placement} hasToasts={hasToasts}>
      { toasts.map(({
        appearance,
        autoDismiss,
        content,
        iconName,
        actionContent,
        onClick,
        id,
        // eslint-disable-next-line @typescript-eslint/no-shadow
        onDismiss,
      }) => (
        <ToastController
          key={id}
          id={id}
          placement={placement}
          appearance={appearance}
          autoDismiss={
            autoDismiss !== undefined
              ? autoDismiss
              : true
          }
          transitionDuration={TransitionDuration.M}
          actionContent={actionContent}
          onClick={onClick}
          autoDismissTimeout={autoDismissTimeout}
          content={content}
          iconName={iconName}
          component={ToastElement}
          onDismiss={() => handleDismiss(id, onDismiss)}
          positionX=""
          positionY=""
        />
      )) }
    </ToastContainer>
  ), [autoDismissTimeout, hasToasts, handleDismiss])

  return (
    <Provider value={ToastContextValue}>
      { children }

      { createPortal(
        [
          createContainer(ToastPlacement.BottomLeft, leftToasts),
          createContainer(ToastPlacement.BottomRight, rightToasts),
        ],
        rootElement,
      ) }
    </Provider>
  )
}

export const ToastConsumer = ({ children }) => (
  <Consumer>{ context => children(context) }</Consumer>
)

export default ToastProvider
