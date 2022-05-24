import * as React from 'react'
import { SVGProps } from 'react'
import createBezierIcon from '../createBezierIcon'

function SvgCheckBold(props: SVGProps<SVGSVGElement>) {
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
        d="m10 14.063 7.071-7.07a1.5 1.5 0 1 1 2.121 2.121l-8.729 8.729a.655.655 0 0 1-.926 0l-4.73-4.73a1.5 1.5 0 1 1 2.121-2.121L10 14.063Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgCheckBold)
