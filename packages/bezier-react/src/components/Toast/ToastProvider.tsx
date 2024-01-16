import React, { useCallback } from 'react'

import { createPortal } from 'react-dom'

import {
  TransitionDuration,
  css,
} from '~/src/foundation'

import useIsMounted from '~/src/hooks/useIsMounted'
import { useWindow } from '~/src/providers/WindowProvider'

import {
  ToastPlacement,
  type ToastProviderProps,
  type ToastType,
} from './Toast.types'
import ToastContainer from './ToastContainer'
import { ToastContextProvider } from './ToastContext'
import ToastController from './ToastController'
import ToastElement from './ToastElement'
import useToastProviderValues from './useToastContextValues'

/**
 * @deprecated
 * FIXME: Styling dependent on specific applications.
 */
const GNB_WIDTH = 68

function ToastProvider({
  autoDismissTimeout = 3000,
  container: givenContainer,
  offset = {
    left: GNB_WIDTH,
    right: 0,
    bottom: 0,
  },
  children = [],
}: ToastProviderProps) {
  const { rootElement } = useWindow()
  const isMounted = useIsMounted()

  const toastContextValue = useToastProviderValues()
  const {
    leftToasts,
    rightToasts,
    dismiss,
  } = toastContextValue
  const container = givenContainer ?? rootElement

  const createContainer = useCallback((placement: ToastPlacement, toasts: ToastType[]) => (
    <ToastContainer
      key={placement}
      placement={placement}
      offset={offset}
    >
      { toasts.map(({
        autoDismiss,
        content,
        preset,
        appearance,
        icon,
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
          icon={icon}
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
    offset,
  ])

  return (
    <ToastContextProvider value={toastContextValue}>
      { children }
      { isMounted && createPortal(
        [
          createContainer(ToastPlacement.BottomLeft, leftToasts),
          createContainer(ToastPlacement.BottomRight, rightToasts),
        ],
        container,
      ) }
    </ToastContextProvider>
  )
}

export default ToastProvider
