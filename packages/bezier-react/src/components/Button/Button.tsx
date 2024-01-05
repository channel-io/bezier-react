import React, {
  forwardRef,
  useCallback,
  useMemo,
} from 'react'

import { isBezierIcon } from '@channel.io/bezier-icons'
import classNames from 'classnames'

import { warn } from '~/src/utils/assert'
import { noop } from '~/src/utils/function'

import {
  Icon,
  IconSize,
} from '~/src/components/Icon'
import {
  LegacyIcon,
  isIconName,
} from '~/src/components/LegacyIcon'
import {
  Spinner,
  SpinnerSize,
} from '~/src/components/Spinner'
import { Text } from '~/src/components/Text'

import type ButtonProps from './Button.types'
import {
  type MouseEventHandler,
  type SideContent,
} from './Button.types'
import {
  ButtonColorVariant,
  ButtonSize,
  ButtonStyleVariant,
} from './Button.types'

import styles from './Button.module.scss'

export const BUTTON_TEST_ID = 'bezier-react-button'
export const BUTTON_INNER_CONTENT_TEST_ID = 'bezier-react-button-inner-content'
export const BUTTON_TEXT_TEST_ID = 'bezier-react-button-text'

export const Button = forwardRef(function Button(
  {
    as,
    className,
    style,
    interpolation,
    testId = BUTTON_TEST_ID,
    type = 'button',
    text,
    disabled = false,
    loading = false,
    active = false,
    size = ButtonSize.M,
    styleVariant = ButtonStyleVariant.Primary,
    colorVariant = ButtonColorVariant.Blue,
    leftContent,
    rightContent,
    onClick = noop,
    ...rest
  }: ButtonProps,
  forwardedRef: React.Ref<HTMLElement>,
) {
  const typography = useMemo(() => {
    switch (size) {
      case ButtonSize.XS:
      case ButtonSize.S:
        return '13'
      case ButtonSize.L:
        return '15'
      case ButtonSize.XL:
        return '18'
      case ButtonSize.M:
      default:
        return '14'
    }
  }, [size])

  const ButtonSpinnerSize = useMemo(() => {
    switch (size) {
      case ButtonSize.S:
      case ButtonSize.XS:
        return SpinnerSize.XS
      case ButtonSize.XL:
      case ButtonSize.L:
      case ButtonSize.M:
      default:
        return SpinnerSize.S
    }
  }, [size])

  const iconSize = useMemo(() => {
    switch (size) {
      case ButtonSize.XS:
      case ButtonSize.S:
        return IconSize.XS
      case ButtonSize.XL:
        return IconSize.Normal
      case ButtonSize.M:
      case ButtonSize.L:
      default:
        return IconSize.S
    }
  }, [size])

  const handleClick = useCallback<MouseEventHandler>((event) => {
    if (!disabled) { onClick(event) }
    return null
  }, [
    onClick,
    disabled,
  ])

  const renderSideContent = useCallback((content?: SideContent) => {
    if (isIconName(content)) {
      warn('Deprecation: IconName as a value for the leftContent property of a Button has been deprecated. Use the Icon of bezier-icons instead.')
      return (
        <LegacyIcon
          name={content}
          size={iconSize}
          className={styles.ButtonIcon}
        />
      )
    }

    if (isBezierIcon(content)) {
      return (
        <Icon
          source={content}
          size={iconSize}
          className={styles.ButtonIcon}
        />
      )
    }

    return content
  }, [iconSize])

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      ref={forwardedRef}
      style={style}
      className={classNames(
        styles.Button,
        styles[`size-${size}`],
        styles[`style-${styleVariant}`],
        styles[`color-${colorVariant}`],
        active && styles.active,
      )}
      disabled={disabled}
      data-testid={testId}
      data-component="BezierButton"
      onClick={handleClick}
      {...rest}
    >
      <div
        className={classNames(
          styles.ButtonContent,
          loading && styles.hidden,
        )}
        data-testid={BUTTON_INNER_CONTENT_TEST_ID}
      >
        { renderSideContent(leftContent) }

        { text && (
          <Text
            testId={BUTTON_TEXT_TEST_ID}
            typo={typography}
            bold
          >
            { text }
          </Text>
        ) }

        { renderSideContent(rightContent) }
      </div>

      { loading && (
        <div className={styles.ButtonLoader}>
          <Spinner size={ButtonSpinnerSize} />
        </div>
      ) }
    </button>
  )
})
