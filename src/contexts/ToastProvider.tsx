/* External dependencies */
import React, { createContext, useState } from 'react'
import { createPortal } from 'react-dom'
import { v4 as uuid } from 'uuid'
import { noop } from 'lodash-es'

/* Internal dependencies */
import { ActionItemType, Appearance, Placement, ToastProviderProps } from '../components/Toast/Toast.types'
import ToastContainer from '../components/Toast/ToastContainer'
import ToastController from '../components/Toast/ToastController'
import { Toast } from '../components/Toast'
import { IconName } from '../components/Icon'

export type ToastId = string

export type Callback = (id: ToastId) => void

export type ToastType = Options & { id: ToastId }

export type Options = {
  content: string
  iconName?: IconName
  appearance?: Appearance
  actionItem?: ActionItemType
  autoDismiss?: boolean
  onDismissCallback?: Callback
}

const defaultOptions: Options = {
  content: '안내 문구입니다.',
  iconName: 'info-filled',
  appearance: Appearance.Info,
  autoDismiss: false,
  onDismissCallback: noop,
}

interface ContextType {
  add: (options: Options) => void
  remove: (id:ToastId) => void
  removeAll: () => void
  update: (id: ToastId, options: Options) => void
  toasts: ToastType[]
}

export const ToastContext = createContext<ContextType>({
  add: noop,
  remove: noop,
  removeAll: noop,
  update: noop,
  toasts: [],
})

const { Consumer, Provider } = ToastContext

const canUseDOM = Boolean(window?.document?.createElement)

function ToastProvider({
  autoDismissTimeout = 5000,
  globalAutoDismiss = true,
  children = [],
  placement = Placement.BottomLeft,
  portalTargetSelector = 'body',
  transitionDuration = 220,
}: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastType[]>([])

  const has = (id: string) => {
    if (!toasts.length) {
      return false
    }
    return Boolean(toasts.filter((toast) => toast.id === id).length)
  }

  const add = (options: Options = defaultOptions) => {
    const newId: ToastId = uuid()

    if (has(newId)) {
      return
    }

    const newToast: ToastType = { id: newId, ...options }
    const newToasts: ToastType[] = [...toasts, newToast]
    setToasts(newToasts)
  }

  const remove = (id: ToastId): void => {
    if (!has(id)) {
      return
    }
    const newToasts: ToastType[] = toasts.filter((toast) => toast.id !== id)
    setToasts(newToasts)
  }

  const removeAll = () => {
    if (!toasts.length) {
      return
    }

    setToasts([])
  }

  const update = (id: ToastId, options: Options = defaultOptions): void => {
    if (!has(id)) {
      return
    }

    const oldToasts = toasts
    const index = oldToasts.findIndex((toast) => toast.id === id)
    const updatedToast: ToastType = { ...oldToasts[index], ...options }
    const newToasts = [...oldToasts.slice(0, index), updatedToast, ...oldToasts.slice(index + 1)]
    setToasts(newToasts)
  }

  const onDismiss = (id: ToastId, callback: Callback = noop) => {
    callback(id)
    remove(id)
  }

  const portalTarget = canUseDOM
    ? document.querySelector(portalTargetSelector)
    : null

  return (
    <Provider value={{ add, remove, removeAll, update, toasts }}>
      { children }

      { portalTarget ? (
        createPortal(
          <ToastContainer placement={placement} hasToasts={Boolean(toasts.length)}>
            { toasts.map(({
              appearance,
              autoDismiss,
              content,
              iconName,
              actionItem,
              id,
              // eslint-disable-next-line @typescript-eslint/no-shadow
              onDismissCallback,
            }, index) => (
              <ToastController
                key={id}
                id={id}
                index={index}
                appearance={appearance}
                autoDismiss={
                  autoDismiss !== undefined
                    ? autoDismiss
                    : globalAutoDismiss
                }
                iconName={iconName}
                actionItem={actionItem}
                autoDismissTimeout={autoDismissTimeout}
                content={content}
                component={Toast}
                placement={placement}
                transitionDuration={transitionDuration}
                onDismiss={() => onDismiss(id, onDismissCallback)}
                onMouseEnter={noop}
                onMouseLeave={noop}
                toasts={toasts}
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
