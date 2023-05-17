import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgMultiNode(props: SVGProps<SVGSVGElement>) {
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
        d="M12 2C10.3431 2 9 3.34315 9 5C9 6.30622 9.83481 7.41746 11 7.82929V11H6C4.34315 11 3 12.3431 3 14V16.1707C1.83481 16.5825 1 17.6938 1 19C1 20.6569 2.34315 22 4 22C5.65685 22 7 20.6569 7 19C7 17.6938 6.16519 16.5825 5 16.1707V14C5 13.4477 5.44772 13 6 13H18C18.5523 13 19 13.4477 19 14V16.1707C17.8348 16.5825 17 17.6938 17 19C17 20.6569 18.3431 22 20 22C21.6569 22 23 20.6569 23 19C23 17.6938 22.1652 16.5825 21 16.1707V14C21 12.3431 19.6569 11 18 11H13V7.82929C14.1652 7.41746 15 6.30622 15 5C15 3.34315 13.6569 2 12 2Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgMultiNode)
