/* External dependencies */
import React, { useCallback, useEffect, useMemo, useState } from 'react'

/* Internal dependencies */
import { TransitionDuration } from '../../foundation'
import { ToastControllerProps } from './Toast.types'
import { initPosition } from './utils'
import ToastTimer from './utils/ToastTimer'

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

  const handleDismiss = useCallback(() => {
    setTransform(initPosition(placement))
    setTimeout(onDismiss, parseDuration(transitionDuration))
  }, [
    onDismiss,
    placement,
    transitionDuration,
  ])

  const timer = useMemo(() => new ToastTimer(handleDismiss, autoDismissTimeout), [
    autoDismissTimeout,
    handleDismiss,
  ])

  const startTimer = useCallback(() => {
    timer.resume()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const clearTimer = useCallback(() => {
    if (autoDismiss) {
      timer.clear()
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

  useEffect(() => {
    if (autoDismiss) {
      startTimer()
    } else {
      clearTimer()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoDismiss])

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
