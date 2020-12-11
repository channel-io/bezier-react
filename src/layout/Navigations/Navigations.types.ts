/* Internal dependencies */
import { UIComponentProps } from '../../types/ComponentProps'

export default interface NavigationsProps extends UIComponentProps {
  children: React.ReactElement | React.ReactElement[]
}

export interface NavigationRefsProps {
  target: HTMLDivElement
  initialWidth: number
  minWidth: number
  maxWidth: number
}

