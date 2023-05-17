import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgCallOff(props: SVGProps<SVGSVGElement>) {
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
        d="M22.5 13.4783C22.5 11.1957 19.3044 8 12 8C4.69565 8 1.49999 11.1957 1.5 13.4783C1.50001 14.8478 2.31536 16.0348 3.32609 16.2174C4.23913 16.4 6.09161 16.191 6.97826 15.3043C7.8913 14.3913 7.43581 12.5465 7.89131 12.1087C8.3468 11.6709 10 11 12 11C14 11 15.6532 11.6709 16.1087 12.1087C16.5642 12.5465 16.1087 14.3913 17.0217 15.3043C17.9084 16.191 19.7609 16.4 20.6739 16.2174C21.6847 16.0348 22.5 14.8478 22.5 13.4783Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgCallOff)
