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
  Options,
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
  placement = ToastPlacement.BottomLeft,
}: ToastProviderProps) {
  const toastService = useMemo(() => new ToastService(), [])
  const [toasts, setToasts] = useState<ToastType[]>([])

  const add = useCallback((content: string, options: Options = defaultOptions) => {
    const result = toastService.add(content, options)
    setToasts(toastService.getToasts())
    return result
  }, [toastService])

  const remove = useCallback((id: ToastId) => {
    toastService.remove(id)
    setToasts(toastService.getToasts())
  }, [toastService])

  const removeAll = useCallback(() => {
    toastService.removeAll()
    setToasts(toastService.getToasts())
  }, [toastService])

  const onDismiss = useCallback((id: ToastId, callback: OnDismissCallback = noop) => {
    callback(id)
    remove(id)
  }, [remove])

  useEffect(() => {
    setToasts(toastService.getToasts())
  }, [toastService])

  const ToastContextValue = useMemo(() => ({ add, remove, removeAll, toasts }), [add, remove, removeAll, toasts])

  const hasToasts = useMemo(() => Boolean(toasts.length), [toasts.length])

  return (
    <Provider value={ToastContextValue}>
      { children }

      { createPortal(
        <ToastContainer placement={placement} hasToasts={hasToasts}>
          { toasts.map(({
            appearance,
            autoDismiss,
            content,
            iconName,
            actionContent,
            actionOnClick,
            id,
            // eslint-disable-next-line @typescript-eslint/no-shadow
            onDismissCallback,
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
              actionOnClick={actionOnClick}
              autoDismissTimeout={autoDismissTimeout}
              content={content}
              iconName={iconName}
              component={ToastElement}
              onDismiss={() => onDismiss(id, onDismissCallback)}
              positionX=""
              positionY=""
            />
          )) }
        </ToastContainer>,
        rootElement,
      ) }
    </Provider>
  )
}

export const ToastConsumer = ({ children }) => (
  <Consumer>{ context => children(context) }</Consumer>
)

export default ToastProvider
