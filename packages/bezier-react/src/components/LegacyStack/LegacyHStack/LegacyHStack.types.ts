import type { LegacyStackProps } from '~/src/components/LegacyStack'

/**
 * @deprecated Use `HStack` instead.
 */
export default interface LegacyHStackProps extends Omit<LegacyStackProps, 'direction'> {}
