import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgHomeFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M3 20C3 20.5523 3.44772 21 4 21H9C9.55228 21 10 20.5523 10 20V15C10 13.8954 10.8954 13 12 13C13.1046 13 14 13.8954 14 15V20C14 20.5523 14.4477 21 15 21H20C20.5523 21 21 20.5523 21 20V9.97815C21 9.36097 20.7151 8.77836 20.2279 8.39945L12.6139 2.47749C12.2528 2.19663 11.7472 2.19663 11.3861 2.47749L3.77212 8.39945C3.28494 8.77836 3 9.36097 3 9.97815V20Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgHomeFilled)
