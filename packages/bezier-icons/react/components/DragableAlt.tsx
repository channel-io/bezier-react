import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgDragableAlt(props: SVGProps<SVGSVGElement>) {
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
        d="M17 8.25a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0ZM17 15.75a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0ZM12 10.5A2.25 2.25 0 1 1 12 6a2.25 2.25 0 0 1 0 4.5ZM9.75 15.75a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0ZM4.75 10.5a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM2.5 15.75a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgDragableAlt)
