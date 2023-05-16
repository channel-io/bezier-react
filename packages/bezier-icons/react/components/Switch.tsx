import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgSwitch(props: SVGProps<SVGSVGElement>) {
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
        d="M9 4a8 8 0 1 0 0 16h6a8 8 0 1 0 0-16H9Zm6 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgSwitch)
