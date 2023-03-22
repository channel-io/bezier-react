/* Internal dependencies */
import type { AxisAlignment } from '~/src/components/Stack/types'

export const MAPPED_FLEX_PROPERTIES: Record<AxisAlignment, string> = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  stretch: 'stretch',
}

export const flex = (alignment: AxisAlignment): string => MAPPED_FLEX_PROPERTIES[alignment]
