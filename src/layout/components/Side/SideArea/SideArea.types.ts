/* Internal dependencies */
import SideCommonProps from 'Layout/components/Side/Side.types'
import LayoutSideType from 'Layout/types/LayoutSideType'

interface SideAreaOptions {
  sideType: LayoutSideType
}

export default interface SideAreaProps extends
  SideCommonProps,
  SideAreaOptions {}
