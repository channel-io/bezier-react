import type { LegacyStackProps } from '~/src/components/LegacyStack/Stack'

export default interface VStackProps extends Omit<LegacyStackProps, 'direction'> {}
