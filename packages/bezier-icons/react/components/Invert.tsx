import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgInvert(props: SVGProps<SVGSVGElement>) {
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
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 0 1-8 8v-3a5 5 0 0 0 0-10V4a8 8 0 0 1 8 8Zm-8-5a5 5 0 0 0 0 10V7Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgInvert)
