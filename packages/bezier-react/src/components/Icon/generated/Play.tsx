import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgPlay(props: SVGProps<SVGSVGElement>) {
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
        d="M20.146 11.39a.75.75 0 0 1 0 1.22l-11.96 8.543A.75.75 0 0 1 7 20.543V3.457a.75.75 0 0 1 1.186-.61l11.96 8.543Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgPlay)
