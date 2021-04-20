/* External dependencies */
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { noop } from 'lodash-es'

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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class Timer {
  timerId!: number

  start: number

  remaining: number

  onDismiss: typeof noop

  constructor(onDismiss: typeof noop, autoDismissTimeout: number) {
    this.start = autoDismissTimeout
    this.remaining = autoDismissTimeout
    this.onDismiss = onDismiss
  }

  clear = () => {
    clearTimeout(this.timerId)
  }

  pause = () => {
    clearTimeout(this.timerId)
    this.remaining -= Date.now() - this.start
  }

  resume = () => {
    this.start = Date.now()
    clearTimeout(this.timerId)
    this.timerId = setTimeout(this.onDismiss, this.remaining)
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
  const [transform, setPositionX] = useState(initPosition(placement))

  const handleDismiss = useCallback(() => {
    setPositionX(initPosition(placement))
    setTimeout(onDismiss, parseDuration(transitionDuration))
  }, [
    onDismiss,
    placement,
    transitionDuration,
  ])

  const timer = useMemo(() => new Timer(handleDismiss, autoDismissTimeout), [
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
    setPositionX(initPosition())
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
