/* Internal dependencies */
import SideCommonProps from '~/src/layout/components/Side/Side.types'
import LayoutSideType from '~/src/layout/types/LayoutSideType'

interface SideAreaOptions {
  sideType: LayoutSideType
}

export default interface SideAreaProps extends
  SideCommonProps,
  SideAreaOptions {}
