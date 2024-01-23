import type { LegacyStackProps } from '~/src/components/LegacyStack/LegacyStack'

export default interface LegacyHStackProps extends Omit<LegacyStackProps, 'direction'> {}
