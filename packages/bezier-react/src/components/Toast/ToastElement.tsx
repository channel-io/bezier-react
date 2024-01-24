import React, { forwardRef } from 'react'

import {
  CancelIcon,
  CheckCircleFilledIcon,
  ErrorTriangleFilledIcon,
  InfoFilledIcon,
  WifiIcon,
  WifiOffIcon,
} from '@channel.io/bezier-icons'
import classNames from 'classnames'

import { getZIndexClassName } from '~/src/utils/props'
import { isString } from '~/src/utils/type'

import {
  Icon,
  IconSize,
} from '~/src/components/Icon'
import { Text } from '~/src/components/Text'

import type ToastProps from './Toast.types'
import {
  ToastAppearance,
  ToastPlacement,
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

export const ToastElement = forwardRef<HTMLDivElement, ToastProps>(function ToastElement({
  preset = ToastPreset.Default,
  placement,
  content = '',
  appearance: appearanceProp,
  icon: iconProp,
  actionContent,
  zIndex,
  testId = TOAST_TEST_ID,
  onClick,
  onDismiss,
  ...props
}, forwardedRef) {
  const {
    appearance,
    icon,
  } = getToastPreset(preset)

  return (
    <div
      className={classNames(
        styles.ToastElement,
        zIndex && getZIndexClassName(zIndex),
        placement === ToastPlacement.BottomLeft && styles.left,
      )}
      ref={forwardedRef}
      data-testid={testId}
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
        onClick={onDismiss}
      >
        <Icon
          source={CancelIcon}
          size={IconSize.XS}
        />
      </button>
    </div>
  )
})
