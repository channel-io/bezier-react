import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgPlusCircle(props: SVGProps<SVGSVGElement>) {
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
        d="M4 12c0 4.411 3.59 8 8 8 4.411 0 8-3.589 8-8 0-4.41-3.589-8-8-8-4.41 0-8 3.59-8 8Zm-2 0C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11 1h4.86v-2H13V6.14h-2V11H6.14v2H11v4.86h2V13Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgPlusCircle)
