import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

import { createPortal } from 'react-dom'

import {
  CancelIcon,
  CheckCircleFilledIcon,
  ErrorTriangleFilledIcon,
  InfoFilledIcon,
  WifiIcon,
  WifiOffIcon,
} from '@channel.io/bezier-icons'
import classNames from 'classnames'

import useIsMounted from '~/src/hooks/useIsMounted'
import { useWindow } from '~/src/providers/WindowProvider'
import { noop } from '~/src/utils/function'
import { getZIndexClassName } from '~/src/utils/props'
import { createContext } from '~/src/utils/react'
import { px } from '~/src/utils/style'
import { isString } from '~/src/utils/type'

import {
  Icon,
  IconSize,
} from '~/src/components/Icon'
import { Text } from '~/src/components/Text'

import {
  type ToastContextValue,
  ToastPlacement,
  type ToastProps,
  type ToastProviderProps,
  type ToastType,
} from './Toast.types'
import {
  ToastAppearance,
  ToastPreset,
} from './Toast.types'
import useToastProviderValues from './useToastContextValues'

import styles from './Toast.module.scss'

function getToastPreset(preset: ToastPreset) {
  return {
    [ToastPreset.Success]: {
      icon: CheckCircleFilledIcon,
      appearance: ToastAppearance.Success,
    },
    [ToastPreset.Error]: {
      icon: ErrorTriangleFilledIcon,
      appearance: ToastAppearance.Error,
    },
    [ToastPreset.Offline]: {
      icon: WifiOffIcon,
      appearance: ToastAppearance.Warning,
    },
    [ToastPreset.Online]: {
      icon: WifiIcon,
      appearance: ToastAppearance.Success,
    },
    [ToastPreset.Default]: {
      icon: InfoFilledIcon,
      appearance: ToastAppearance.Info,
    },
  }[preset]
}

function Toast({
  placement,
  appearance: appearanceProp,
  preset = ToastPreset.Default,
  icon: iconProp,
  content,
  actionContent,
  zIndex,
  autoDismiss = true,
  autoDismissTimeout,
  version = 0,
  onClick,
  onDismiss,
  ...props
}: ToastProps) {
  const { window } = useWindow()

  const dismissTimer = useRef<ReturnType<Window['setTimeout']>>()

  const [className, setClassName] = useState(
    classNames(
      styles.ToastElement,
      zIndex && getZIndexClassName(zIndex),
      styles[`placement-${placement}`],
    ),
  )

  const runSlideOutAnimation = useCallback(() => {
    setClassName(prev => `${prev} ${styles['slide-out']}`)
  }, [])

  const handleAnimationEnd = useCallback<React.AnimationEventHandler>((event) => {
    if (
      event.animationName === styles['slide-out-left']
      || event.animationName === styles['slide-out-right']
    ) {
      onDismiss?.()
    }
  }, [onDismiss])

  useEffect(function startDismissTimer() {
    if (autoDismiss) {
      dismissTimer.current = window.setTimeout(runSlideOutAnimation, autoDismissTimeout)
    }

    return function cleanup() {
      if (dismissTimer.current != null) {
        clearTimeout(dismissTimer.current)
      }
    }
  }, [
    autoDismiss,
    autoDismissTimeout,
    runSlideOutAnimation,
    window,
    version,
  ])

  const {
    appearance,
    icon,
  } = getToastPreset(preset)

  return (
    <div
      className={className}
      onAnimationEnd={handleAnimationEnd}
      {...props}
    >
      <div
        className={classNames(
          styles.IconWrapper,
          styles[`appearance-${appearanceProp ?? appearance}`],
        )}
      >
        <Icon
          source={iconProp ?? icon}
          size={IconSize.S}
        />
      </div>

      <div className={styles.Content}>
        <Text
          className={styles.EllipsisableContent}
          typo="14"
          color="txt-black-darkest"
          truncated={5}
        >
          { isString(content)
            ? content.split('\n').map((str, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <React.Fragment key={index}>
                { index !== 0 && (<br />) }
                { str }
              </React.Fragment>
            ))
            : content }
          { ' ' }
          { actionContent && onClick && (
            <button
              className={styles.ActionContent}
              type="button"
              onClick={onClick}
            >
              { actionContent }
            </button>
          ) }
        </Text>
      </div>

      <button
        className={styles.Close}
        type="button"
        onClick={runSlideOutAnimation}
      >
        <Icon
          source={CancelIcon}
          size={IconSize.XS}
        />
      </button>
    </div>
  )
}

const [
  ToastContextProvider,
  useToastContext,
] = createContext<ToastContextValue>({
  add: () => '',
  update: () => '',
  remove: noop,
  removeAll: noop,
  leftToasts: [],
  rightToasts: [],
})

export function useToast() {
  const context = useToastContext()

  if (!context) {
    throw Error('\'useToast\' must be used within \'ToastProvider\'')
  }

  return {
    addToast: context.add,
    updateToast: context.update,
    removeToast: context.remove,
    removeAllToasts: context.removeAll,
    leftToasts: context.leftToasts,
    rightToasts: context.rightToasts,
  }
}

/**
 * @deprecated
 * FIXME: Styling dependent on specific applications.
 */
const GNB_WIDTH = 68

export function ToastProvider({
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
    <div
      key={placement}
      style={{
        bottom: px(offset?.bottom),
        ...(placement === ToastPlacement.BottomRight
          ? { right: px(offset?.right) }
          : { left: px(offset?.left) }),
      }}
      className={styles.ToastContainer}
    >
      { toasts.map(({
        id,
        onDismiss,
        ...rest
      }) => (
        <Toast
          {...rest}
          key={id}
          placement={placement}
          autoDismissTimeout={autoDismissTimeout}
          onDismiss={() => dismiss(id, onDismiss)}
        />
      )) }
    </div>
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
