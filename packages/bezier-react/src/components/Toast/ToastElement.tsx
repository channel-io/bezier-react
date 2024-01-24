import React, {
  type Ref,
  forwardRef,
  useMemo,
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

const ToastElement = (
  {
    as,
    testId = TOAST_TEST_ID,
    preset = ToastPreset.Default,
    content = '',
    appearance: appearanceProp,
    icon: iconProp,
    actionContent,
    zIndex,
    onClick,
    onDismiss,
    ...props
  }: ToastProps,
  forwardedRef: Ref<any>,
) => {
  const ToastContentComponent = useMemo(() => {
    if (isString(content)) {
      return content.split('\n').map((str, index) => (
        <React.Fragment key={index}>
          { index !== 0 && (<br />) }
          { str }
        </React.Fragment>
      ))
    }
    return content
  }, [content])

  const {
    appearance,
    icon,
  } = getToastPreset(preset)

  return (
    <div
      className={classNames(
        styles.ToastElement,
        zIndex && getZIndexClassName(zIndex),
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
          { ToastContentComponent }
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
}

export default forwardRef(ToastElement)
