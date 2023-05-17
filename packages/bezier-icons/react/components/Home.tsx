import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgHome(props: SVGProps<SVGSVGElement>) {
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
        d="M12.6139 2.47749C12.2528 2.19663 11.7472 2.19663 11.3861 2.47749L3.77212 8.39945C3.28494 8.77836 3 9.36097 3 9.97815V20C3 20.5523 3.44772 21 4 21H10C10.5523 21 11 20.5523 11 20V15C11 14.4477 11.4477 14 12 14C12.5523 14 13 14.4477 13 15V20C13 20.5523 13.4477 21 14 21H20C20.5523 21 21 20.5523 21 20V9.97815C21 9.36097 20.7151 8.77836 20.2279 8.39945L12.6139 2.47749ZM9 19V15C9 13.3431 10.3431 12 12 12C13.6569 12 15 13.3431 15 15V19H19V9.97815L12 4.53371L5 10V19H9Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgHome)
