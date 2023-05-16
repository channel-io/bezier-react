import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgPause(props: SVGProps<SVGSVGElement>) {
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
        d="M5.5 21h4a.5.5 0 0 0 .5-.5v-17a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5v17a.5.5 0 0 0 .5.5Zm9 0h4a.5.5 0 0 0 .5-.5v-17a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5v17a.5.5 0 0 0 .5.5Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgPause)
