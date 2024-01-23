import type { LegacyStackProps } from '~/src/components/LegacyStack/LegacyStack'

export default interface LegacyVStackProps extends Omit<LegacyStackProps, 'direction'> {}
