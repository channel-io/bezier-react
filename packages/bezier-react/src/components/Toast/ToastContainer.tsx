import React from 'react'

import { px } from '~/src/utils/style'

import {
  type ToastContainerProps,
  ToastPlacement,
} from './Toast.types'

import styles from './Toast.module.scss'

const ToastContainer = ({
  children,
  offset,
  placement,
  ...props
}: ToastContainerProps) => (
  <div
    style={{
      bottom: px(offset?.bottom),
      ...(placement === ToastPlacement.BottomRight
        ? { right: px(offset?.right) }
        : { left: px(offset?.left) }),
    }}
    className={styles.ToastContainer}
    {...props}
  >
    { children }
  </div>
)

export default React.memo(ToastContainer)
