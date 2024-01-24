import { type LegacyStackItemProps } from '~/src/components/LegacyStack'

/**
 * @deprecated Use `Stack` and `justify` prop instead.
 */
export default interface LegacySpacerProps extends
  Omit<LegacyStackItemProps, 'size' | 'weight' | 'grow' | 'shrink'> {}
