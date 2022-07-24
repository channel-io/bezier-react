/* External dependencies */
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { noop } from 'lodash-es'

/* Internal dependencies */
import { css, TransitionDuration } from 'Foundation'
import { getRootElement } from 'Utils/domUtils'
import ToastContext from './ToastContext'
import {
  OnDismissCallback,
  defaultOptions,
  ToastOptions,
  ToastPlacement,
  ToastId,
  ToastProviderProps,
  ToastType,
  ToastContent,
} from './Toast.types'
import ToastContainer from './ToastContainer'
import ToastController from './ToastController'
import ToastElement from './ToastElement'
import ToastService from './ToastService'

const { Provider } = ToastContext

function ToastProvider({
  autoDismissTimeout = 3000,
  children = [],
}: ToastProviderProps) {
  const leftToastService = useMemo(() => new ToastService(), [])
  const rightToastService = useMemo(() => new ToastService(), [])
  const [leftToasts, setLeftToasts] = useState<ToastType[]>([])
  const [rightToasts, setRightToasts] = useState<ToastType[]>([])

  const add = useCallback((content: ToastContent, options: ToastOptions = defaultOptions) => {
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
    if (leftToastService.remove(id)) {
      setLeftToasts(leftToastService.getToasts())
    }
    if (rightToastService.remove(id)) {
      setRightToasts(rightToastService.getToasts())
    }
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
          onDismiss={() => handleDismiss(id, onDismiss)}
          transform={css``}
          zIndex={zIndex}
        />
      )) }
    </ToastContainer>
  ), [
    autoDismissTimeout,
    handleDismiss,
  ])

  return (
    <Provider value={ToastContextValue}>
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
