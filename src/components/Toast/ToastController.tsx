/* External dependencies */
import React, { useCallback, useEffect, useRef, useState } from 'react'

/* Internal dependencies */
import { TransitionDuration } from '../../foundation'
import { ToastControllerProps } from './Toast.types'
import { showedToastTranslateXStyle, initPosition } from './utils'

function parseDuration(transitionDuration: TransitionDuration) {
  switch (transitionDuration) {
    case TransitionDuration.L:
      return 500
    case TransitionDuration.M:
      return 300
    case TransitionDuration.S:
    default:
      return 150
  }
}

function ToastController({
  autoDismissTimeout,
  transitionDuration,
  autoDismiss,
  placement,
  component: ToastElement,
  onDismiss,
  ...props
}: ToastControllerProps) {
  const [transform, setTransform] = useState(initPosition(placement))
  const timer = useRef<number>()

  const handleDismiss = useCallback(() => {
    setTransform(initPosition(placement))
    timer.current = setTimeout(onDismiss, parseDuration(transitionDuration))
  }, [
    onDismiss,
    placement,
    transitionDuration,
  ])

  const startTimer = useCallback(() => {
    timer.current = setTimeout(handleDismiss, autoDismissTimeout)
  }, [
    autoDismissTimeout,
    handleDismiss,
  ])

  const clearTimer = useCallback(() => {
    if (autoDismiss) {
      clearTimeout(timer.current)
    }
  }, [autoDismiss])

  useEffect(() => {
    setTransform(showedToastTranslateXStyle)
  }, [])

  useEffect(() => {
    if (autoDismiss) {
      timer.current = setTimeout(startTimer, parseDuration(transitionDuration))
    }
    return clearTimer
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ToastElement
      transitionDuration={transitionDuration}
      onDismiss={handleDismiss}
      {...props}
      transform={transform}
    />
  )
}

export default React.memo(ToastController)
