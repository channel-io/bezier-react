import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgData(props: SVGProps<SVGSVGElement>) {
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
        d="M18 5H6a1 1 0 0 0-1 1v1h14V6a1 1 0 0 0-1-1ZM3 7v11a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v1Zm16 2H5v4h14V9ZM5 15v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3H5Zm1-4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm1 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgData)
