import type { LegacyStackProps } from '~/src/components/LegacyStack/Stack'

export default interface HStackProps extends Omit<LegacyStackProps, 'direction'> {}
