import { type SourceSize } from '~/src/types/alpha-tokens'

// NOTE: 'typescript-plugin-css-modules' does not support path alias
/* eslint-disable no-restricted-imports */
import sourceSizeStyles from '../styles/components/alpha-source-size.module.scss'
/* eslint-enable no-restricted-imports */

export function getSourceSizeClassName(size: SourceSize) {
  return sourceSizeStyles[`size-${size}`]
}
