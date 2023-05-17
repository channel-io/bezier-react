import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgRow(props: SVGProps<SVGSVGElement>) {
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
        d="M19 9H5V5H19V9ZM4.5 11H19.5C20.327 11 21 10.327 21 9.5V4.5C21 3.673 20.327 3 19.5 3H4.5C3.673 3 3 3.673 3 4.5V9.5C3 10.327 3.673 11 4.5 11ZM19 19H5V15H19V19ZM4.5 21H19.5C20.327 21 21 20.327 21 19.5V14.5C21 13.673 20.327 13 19.5 13H4.5C3.673 13 3 13.673 3 14.5V19.5C3 20.327 3.673 21 4.5 21Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgRow)
