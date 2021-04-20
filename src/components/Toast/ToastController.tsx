/* External dependencies */
import React, { useCallback, useEffect, useState } from 'react'

/* Internal dependencies */
import { TransitionDuration } from '../../foundation'
import { ToastControllerProps } from './Toast.types'
import { initPosition } from './utils'

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
  id,
  onDismiss,
  ...props
}: ToastControllerProps) {
  const [transform, setTransform] = useState(initPosition(placement))
  const [timer, setTimer] = useState(0)

  const handleDismiss = useCallback(() => {
    setTransform(initPosition(placement))
    setTimeout(onDismiss, parseDuration(transitionDuration))
  }, [
    onDismiss,
    placement,
    transitionDuration,
  ])

  const startTimer = useCallback(() => {
    setTimer(
      setTimeout(handleDismiss, autoDismissTimeout),
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const clearTimer = useCallback(() => {
    if (autoDismiss) {
      clearTimeout(timer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setTransform(initPosition())
    if (autoDismiss) {
      setTimeout(startTimer, parseDuration(transitionDuration))
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
