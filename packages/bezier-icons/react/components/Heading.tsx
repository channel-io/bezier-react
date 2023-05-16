import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgHeading(props: SVGProps<SVGSVGElement>) {
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
        d="M5 4a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v6.5h8V4a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-6.5H8V20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgHeading)
