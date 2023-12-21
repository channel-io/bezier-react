import type { AxisAlignment } from '~/src/components/LegacyStack/types'

const MAPPED_FLEX_PROPERTIES: Record<AxisAlignment, string> = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  stretch: 'stretch',
}

export const flex = (alignment: AxisAlignment): string => MAPPED_FLEX_PROPERTIES[alignment]
