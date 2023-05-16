import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgAssignToMe(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.293 3.293a1 1 0 1 1 1.414 1.414L16.414 9H20a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1V4a1 1 0 1 1 2 0v3.586l4.293-4.293Zm-7.944 6.53a2.85 2.85 0 1 1-5.698.002 2.85 2.85 0 0 1 5.698-.002ZM2 19.573a6.514 6.514 0 0 1 13 0 .41.41 0 0 1-.413.427H2.413A.411.411 0 0 1 2 19.573Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgAssignToMe)
