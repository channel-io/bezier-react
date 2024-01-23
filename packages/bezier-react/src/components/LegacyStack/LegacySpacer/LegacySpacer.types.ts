import { type LegacyStackItemProps } from '~/src/components/LegacyStack'

export default interface LegacySpacerProps extends
  Omit<LegacyStackItemProps, 'size' | 'weight' | 'grow' | 'shrink'> {}
