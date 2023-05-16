import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgSquaresFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M6 7a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3h-7a4 4 0 0 1-4-4V7Z"
      />
      <path
        fill="currentColor"
        d="M7 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-8a3 3 0 0 1-3-3V6Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgSquaresFilled)
