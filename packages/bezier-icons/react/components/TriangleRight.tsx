import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgTriangleRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.3701 11.9227L9.63478 17.5353C9.38241 17.7452 9 17.5662 9 17.2392V6.01273C9 5.68569 9.38241 5.50671 9.63478 5.7153L16.3701 11.3292C16.5555 11.4837 16.5555 11.7682 16.3701 11.9227Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgTriangleRight)
