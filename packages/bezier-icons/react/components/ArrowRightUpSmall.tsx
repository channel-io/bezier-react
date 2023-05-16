import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgArrowRightUpSmall(props: SVGProps<SVGSVGElement>) {
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
        d="M7.05 16.95a1 1 0 0 0 1.414 0l6.779-6.778v5.364a1 1 0 0 0 2 0V7.757a1 1 0 0 0-1-1H8.464a1 1 0 1 0 0 2h5.364L7.05 15.536a1 1 0 0 0 0 1.414Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgArrowRightUpSmall)
