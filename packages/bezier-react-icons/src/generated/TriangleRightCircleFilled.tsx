import * as React from 'react'
import { SVGProps } from 'react'
import createBezierIcon from '../createBezierIcon'

function SvgTriangleRightCircleFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M10.266 16.667c-.015 0-.028-.006-.043-.008a.3.3 0 0 1-.188-.093.284.284 0 0 1-.083-.195V7.65c0-.08.036-.143.083-.194.012-.014.026-.024.04-.035a.311.311 0 0 1 .148-.06c.015 0 .028-.007.043-.006.062.003.124.02.178.065l5.23 4.36a.3.3 0 0 1 0 .46l-5.23 4.36a.298.298 0 0 1-.178.066ZM12 2C6.477 2 2 6.478 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.522-4.477-10-10-10Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgTriangleRightCircleFilled)
