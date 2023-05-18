import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgArrowRightUp(props: SVGProps<SVGSVGElement>) {
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
        d="M17.997 6Zm0 1.414L5.411 20a1 1 0 1 1-1.414-1.414L16.583 6H4.997a1 1 0 1 1 0-2h13.5a1.5 1.5 0 0 1 1.5 1.5V19a1 1 0 1 1-2 0V7.414Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgArrowRightUp)
