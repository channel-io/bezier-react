/* External dependencies */
import React, { ComponentType, useCallback, useEffect, useState } from 'react'
import { noop } from 'lodash-es'

/* Internal dependencies */
import ToastProps, { Placement } from './Toast.types'

type ToastControllerProps = ToastProps & {
  autoDismiss: boolean
  autoDismissTimeout: number
  placement: Placement
  component: ComponentType<ToastProps> }

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

const initPosition = (placement: Placement, isXPosition: boolean) => {
  switch (placement) {
    case Placement.TopLeft:
      return isXPosition ? '-120%' : '0'
    case Placement.TopCenter:
      return isXPosition ? '0' : '-120%'
    case Placement.TopRight:
      return isXPosition ? '120%' : '0'
    case Placement.BottomLeft:
      return isXPosition ? '-120%' : '0'
    case Placement.BottomCenter:
      return isXPosition ? '0' : '120%'
    case Placement.BottomRight:
      return isXPosition ? '120%' : '0'
    default:
      return '0'
  }
}

function ToastController({
  autoDismissTimeout,
  transitionDuration,
  placement,
  component: Toast,
  id,
  onDismiss,
  ...props
}: ToastControllerProps) {
  const [positionX, setPositionX] = useState(initPosition(placement, true))
  const [positionY, setPositionY] = useState(initPosition(placement, false))

  const handleMouseEnter = useCallback(() => {
  }, [])

  const handleMouseLeave = useCallback(() => {
  }, [])

  const handleDismiss = useCallback(() => {
    setPositionX(initPosition(placement, true))
    setPositionY(initPosition(placement, false))
    setTimeout(onDismiss, transitionDuration)
  }, [onDismiss, placement, transitionDuration])

  useEffect(() => {
    setPositionX('0')
    setPositionY('0')
  }, [])

  return (
    <Toast
      key={id}
      transitionDuration={transitionDuration}
      onDismiss={handleDismiss}
      {...props}
      positionX={positionX}
      positionY={positionY}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  )
}

export default React.memo(ToastController)
