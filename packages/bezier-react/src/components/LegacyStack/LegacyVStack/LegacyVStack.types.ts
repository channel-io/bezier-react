import type { LegacyStackProps } from '~/src/components/LegacyStack'

/**
 * @deprecated Use `VStack` instead.
 */
export default interface LegacyVStackProps
  extends Omit<LegacyStackProps, 'direction'> {}
