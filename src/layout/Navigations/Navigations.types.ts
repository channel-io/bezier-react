/* Internal dependencies */
import { UIComponentProps } from '../../types/ComponentProps'

export interface NavigationRefsProps {
  target: HTMLDivElement
  initialWidth: number
  minWidth: number
  maxWidth: number
}

export default interface NavigationsProps extends UIComponentProps {
  children: React.ReactElement | React.ReactElement[]
  adjacent?: React.MutableRefObject<HTMLDivElement | null>
}
