import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgTriangleLeft(props: SVGProps<SVGSVGElement>) {
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
        d="M7.62987 11.9227L14.3652 17.5353C14.6176 17.7452 15 17.5662 15 17.2392V6.01273C15 5.68569 14.6176 5.50671 14.3652 5.7153L7.62987 11.3292C7.44445 11.4837 7.44445 11.7682 7.62987 11.9227Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgTriangleLeft)
