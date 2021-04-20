/* External dependencies */
import { noop } from 'lodash-es'

class ToastTimer {
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

  resume = () => {
    this.start = Date.now()
    clearTimeout(this.timerId)
    this.timerId = setTimeout(this.onDismiss, this.remaining)
  }
}

export default ToastTimer
