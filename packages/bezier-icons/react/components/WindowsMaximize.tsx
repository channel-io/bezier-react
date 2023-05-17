import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgWindowsMaximize(props: SVGProps<SVGSVGElement>) {
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
        d="M16 8H8V16H16V8ZM7 7V17H17V7H7Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgWindowsMaximize)
