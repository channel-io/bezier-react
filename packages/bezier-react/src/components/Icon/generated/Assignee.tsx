import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgAssignee(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.715 2h-7.43a.284.284 0 0 0-.284.284v10.747c0 .244.286.375.47.215L18 10.182l3.528 3.064c.184.16.471.03.471-.215V2.284A.285.285 0 0 0 21.715 2ZM8.5 12.673a2.85 2.85 0 1 0 0-5.698 2.85 2.85 0 0 0 0 5.698Zm-6.5 6.9a6.514 6.514 0 0 1 13 0 .41.41 0 0 1-.413.427H2.413A.411.411 0 0 1 2 19.573Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgAssignee)
