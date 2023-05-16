import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgTriangleLeft(props: SVGProps<SVGSVGElement>) {
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
        d="m7.63 11.923 6.735 5.612c.253.21.635.031.635-.296V6.013a.388.388 0 0 0-.635-.298L7.63 11.33a.386.386 0 0 0 0 .594Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgTriangleLeft)
