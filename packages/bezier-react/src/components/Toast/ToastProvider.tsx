import React, { useCallback } from 'react'

import { createPortal } from 'react-dom'

import {
  css,
  TransitionDuration,
} from '~/src/foundation'

import { getRootElement } from '~/src/utils/domUtils'

import {
  ToastPlacement,
  type ToastProviderProps,
  type ToastType,
} from './Toast.types'
import ToastContainer from './ToastContainer'
import ToastContext from './ToastContext'
import ToastController from './ToastController'
import ToastElement from './ToastElement'
import useToastProviderValues from './useToastContextValues'

const { Provider } = ToastContext

function ToastProvider({
  autoDismissTimeout = 3000,
  children = [],
}: ToastProviderProps) {
  const toastContextValue = useToastProviderValues()
  const {
    leftToasts,
    rightToasts,
    dismiss,
  } = toastContextValue

  const createContainer = useCallback((placement: ToastPlacement, toasts: ToastType[]) => (
    <ToastContainer
      key={placement}
      placement={placement}
    >
      { toasts.map(({
        autoDismiss,
        content,
        preset,
        appearance,
        iconName,
        actionContent,
        onClick,
        id,
        onDismiss,
        zIndex,
        version,
      }) => (
        <ToastController
          key={id}
          placement={placement}
          autoDismiss={autoDismiss ?? true}
          transitionDuration={TransitionDuration.M}
          actionContent={actionContent}
          onClick={onClick}
          autoDismissTimeout={autoDismissTimeout}
          preset={preset}
          appearance={appearance}
          content={content}
          iconName={iconName}
          component={ToastElement}
          onDismiss={() => dismiss(id, onDismiss)}
          transform={css``}
          zIndex={zIndex}
          version={version}
        />
      )) }
    </ToastContainer>
  ), [
    autoDismissTimeout,
    dismiss,
  ])

  return (
    <Provider value={toastContextValue}>
      { children }
      { createPortal(
        [
          createContainer(ToastPlacement.BottomLeft, leftToasts),
          createContainer(ToastPlacement.BottomRight, rightToasts),
        ],
        getRootElement(),
      ) }
    </Provider>
  )
}

export default ToastProvider
