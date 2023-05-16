import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgTriangleRight(props: SVGProps<SVGSVGElement>) {
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
        d="m16.37 11.923-6.735 5.612A.387.387 0 0 1 9 17.24V6.013c0-.327.382-.506.635-.298l6.735 5.614a.386.386 0 0 1 0 .594Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgTriangleRight)
