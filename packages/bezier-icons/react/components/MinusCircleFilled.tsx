import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgMinusCircleFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M6 13h12v-2H6v2Zm6-11C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgMinusCircleFilled)
