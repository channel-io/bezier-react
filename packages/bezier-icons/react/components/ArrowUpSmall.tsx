import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgArrowUpSmall(props: SVGProps<SVGSVGElement>) {
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
        d="M12 19a1 1 0 0 0 1-1V8.414l3.793 3.793a1 1 0 0 0 1.414-1.414l-5.5-5.5a1 1 0 0 0-1.414 0l-5.5 5.5a1 1 0 1 0 1.414 1.414L11 8.414V18a1 1 0 0 0 1 1Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgArrowUpSmall)
