import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgPlusCircleFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M17.86 13H13v4.86h-2V13H6.14v-2H11V6.14h2V11h4.86v2ZM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgPlusCircleFilled)
