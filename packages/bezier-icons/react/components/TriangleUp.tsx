import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgTriangleUp(props: SVGProps<SVGSVGElement>) {
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
        d="M11.703 8.639 6.09 15.374a.387.387 0 0 0 .297.635h11.226a.388.388 0 0 0 .297-.635L12.297 8.64a.386.386 0 0 0-.594 0Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgTriangleUp)
