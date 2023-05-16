import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgWindowsMaximize(props: SVGProps<SVGSVGElement>) {
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
        d="M16 8H8v8h8V8ZM7 7v10h10V7H7Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgWindowsMaximize)
