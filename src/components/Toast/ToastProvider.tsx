/* External dependencies */
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { noop } from 'lodash-es'

/* Internal dependencies */
import ToastContext from '../../contexts/ToastContext'
import { TransitionDuration } from '../../foundation'
import { rootElement } from '../../utils/domUtils'
import {
  Callback,
  defaultOptions,
  Options,
  Placement,
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
  globalAutoDismiss = true,
  transitionDuration = TransitionDuration.S,
  children = [],
  placement = Placement.BottomLeft,
}: ToastProviderProps) {
  const toastService = useMemo(() => new ToastService(), [])
  const [toasts, setToasts] = useState<ToastType[]>([])

  const portalTarget = rootElement

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

  const onDismiss = useCallback((id: ToastId, callback: Callback = noop) => {
    callback(id)
    remove(id)
  }, [remove])

  useEffect(() => {
    setToasts(toastService.getToasts())
  }, [toastService])

  return (
    <Provider value={{ add, remove, removeAll, toasts }}>
      { children }

      { portalTarget ? (
        createPortal(
          <ToastContainer placement={placement} hasToasts={Boolean(toasts.length)}>
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
                    : globalAutoDismiss
                }
                actionContent={actionContent}
                actionOnClick={actionOnClick}
                autoDismissTimeout={autoDismissTimeout}
                content={content}
                iconName={iconName}
                component={ToastElement}
                transitionDuration={transitionDuration}
                onDismiss={() => onDismiss(id, onDismissCallback)}
                positionX=""
                positionY=""
              />
            )) }
          </ToastContainer>,
          portalTarget,
        )
      ) : (
        <ToastContainer placement={placement} hasToasts={Boolean(toasts.length)} />
      ) }
    </Provider>
  )
}

export const ToastConsumer = ({ children }) => (
  <Consumer>{ context => children(context) }</Consumer>
)

export default ToastProvider
