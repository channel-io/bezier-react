import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgMore(props: SVGProps<SVGSVGElement>) {
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
        d="M2.5 12a2.257 2.257 0 0 0 2.25 2.25A2.257 2.257 0 0 0 7 12a2.257 2.257 0 0 0-2.25-2.25A2.257 2.257 0 0 0 2.5 12Zm9.5 2.25A2.257 2.257 0 0 1 9.75 12 2.257 2.257 0 0 1 12 9.75 2.257 2.257 0 0 1 14.25 12 2.257 2.257 0 0 1 12 14.25Zm7.25 0A2.257 2.257 0 0 1 17 12a2.257 2.257 0 0 1 2.25-2.25A2.257 2.257 0 0 1 21.5 12a2.257 2.257 0 0 1-2.25 2.25Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgMore)
