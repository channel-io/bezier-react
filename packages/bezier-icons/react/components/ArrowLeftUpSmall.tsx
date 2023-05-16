import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgArrowLeftUpSmall(props: SVGProps<SVGSVGElement>) {
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
        d="M16.95 16.95a1 1 0 0 0 0-1.414l-6.778-6.779h5.364a1 1 0 1 0 0-2H7.757a1 1 0 0 0-1 1v7.779a1 1 0 0 0 2 0v-5.364l6.779 6.778a1 1 0 0 0 1.414 0Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgArrowLeftUpSmall)
