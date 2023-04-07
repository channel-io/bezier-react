import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

import { window } from '~/src/utils/domUtils'

import { type ToastControllerProps } from './Toast.types'
import {
  initPosition,
  showedToastTranslateXStyle,
} from './utils'

function ToastController({
  autoDismissTimeout,
  transitionDuration,
  autoDismiss,
  placement,
  component: ToastElement,
  onDismiss,
  version = 0,
  ...props
}: ToastControllerProps) {
  const [transform, setTransform] = useState(showedToastTranslateXStyle)
  const dismissTimer = useRef<ReturnType<Window['setTimeout']>>()

  const handleDismiss = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    setTransform(initPosition(placement))
    dismissTimer.current = window.setTimeout(() => {
      onDismiss(e)
    }, transitionDuration)
  }, [
    onDismiss,
    placement,
    transitionDuration,
  ])

  const startDismissTimer = useCallback(() => {
    dismissTimer.current = window.setTimeout(handleDismiss, autoDismissTimeout)
  }, [
    autoDismissTimeout,
    handleDismiss,
  ])

  const clearDismissTimer = useCallback(() => {
    if (dismissTimer.current != null) {
      clearTimeout(dismissTimer.current)
    }
  }, [])

  useEffect(function initStartDismissTimer() {
    clearDismissTimer()
    if (autoDismiss) {
      dismissTimer.current = window.setTimeout(startDismissTimer, transitionDuration)
    }
    return clearDismissTimer
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    autoDismiss,
    version,
  ])

  return (
    <ToastElement
      transitionDuration={transitionDuration}
      placement={placement}
      onDismiss={handleDismiss}
      {...props}
      transform={transform}
    />
  )
}

export default React.memo(ToastController)
