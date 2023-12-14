import React, { forwardRef } from 'react'

import classNames from 'classnames'

import {
  cssVarName,
  cssVarValue,
} from '~/src/utils/style'

import type SpinnerProps from './Spinner.types'
import { SpinnerSize } from './Spinner.types'

import styles from './Spinner.module.scss'

export const SPINNER_TEST_ID = 'bezier-react-spinner'

const cv = cssVarName('spinner')

const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(function Spinner({
  testId = SPINNER_TEST_ID,
  as,
  style,
  className,
  size = SpinnerSize.M,
  color,
  ...rest
}, forwardedRef) {
  const Element = as || 'div'

  return (
    <Element
      {...rest}
      ref={forwardedRef}
      style={{
        [cv('color')]: cssVarValue(color),
        ...style,
      }}
      className={classNames(
        styles.Spinner,
        styles[`size-${size}`],
        className,
      )}
      key="spinner"
      data-testid={testId}
    />
  )
})

export default Spinner
