import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgSingleNode(props: SVGProps<SVGSVGElement>) {
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
        d="M2 5C2 3.34315 3.34315 2 5 2C6.30622 2 7.41746 2.83481 7.82929 4H10C11.6569 4 13 5.34315 13 7V17C13 17.5523 13.4477 18 14 18H16.1707C16.5825 16.8348 17.6938 16 19 16C20.6569 16 22 17.3431 22 19C22 20.6569 20.6569 22 19 22C17.6938 22 16.5825 21.1652 16.1707 20H14C12.3431 20 11 18.6569 11 17V7C11 6.44772 10.5523 6 10 6H7.82929C7.41746 7.16519 6.30622 8 5 8C3.34315 8 2 6.65685 2 5Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgSingleNode)
