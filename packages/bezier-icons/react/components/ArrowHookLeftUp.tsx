import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgArrowHookLeftUp(props: SVGProps<SVGSVGElement>) {
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
        d="M14.5 8H5.207l3.266-3.267A1 1 0 0 0 7.06 3.32L2.44 7.94a1.502 1.502 0 0 0 0 2.122l4.62 4.62a1 1 0 0 0 1.414-1.415L5.207 10H14.5c2.481 0 4.5 2.02 4.5 4.5 0 2.481-2.019 4.5-4.5 4.5H11a1 1 0 1 0 0 2h3.5c3.584 0 6.5-2.916 6.5-6.5S18.084 8 14.5 8Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgArrowHookLeftUp)
