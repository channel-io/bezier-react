import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgArrowHookRightUp(props: SVGProps<SVGSVGElement>) {
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
        d="M9.5 8h9.294l-3.267-3.267a1 1 0 0 1 1.415-1.414l4.62 4.62a1.502 1.502 0 0 1 0 2.122l-4.62 4.62a1 1 0 0 1-1.415-1.415L18.794 10H9.5A4.505 4.505 0 0 0 5 14.5C5 16.981 7.02 19 9.5 19H13a1 1 0 0 1 0 2H9.5A6.508 6.508 0 0 1 3 14.5C3 10.916 5.916 8 9.5 8Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgArrowHookRightUp)
