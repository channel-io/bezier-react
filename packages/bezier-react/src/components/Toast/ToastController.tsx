import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

import {
  CancelIcon,
  CheckCircleFilledIcon,
  ErrorTriangleFilledIcon,
  InfoFilledIcon,
  WifiIcon,
  WifiOffIcon,
} from '@channel.io/bezier-icons'
import classNames from 'classnames'

import { useWindow } from '~/src/providers/WindowProvider'
import { getZIndexClassName } from '~/src/utils/props'
import { isString } from '~/src/utils/type'

import {
  Icon,
  IconSize,
} from '~/src/components/Icon'
import { Text } from '~/src/components/Text'

import { type ToastControllerProps } from './Toast.types'
import {
  ToastAppearance,
  ToastPreset,
} from './Toast.types'

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

export const TOAST_TEST_ID = 'bezier-react-toast'

function ToastController({
  autoDismissTimeout,
  transitionDuration,
  autoDismiss = true,
  placement,
  appearance: appearanceProp,
  preset = ToastPreset.Default,
  icon: iconProp,
  content,
  zIndex,
  actionContent,
  onClick,
  onDismiss,
  version = 0,
  testId = TOAST_TEST_ID,
  ...props
}: ToastControllerProps) {
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
      onDismiss()
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
      data-testid={testId}
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
        data-testid={`${TOAST_TEST_ID}-close`}
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

export default React.memo(ToastController)
