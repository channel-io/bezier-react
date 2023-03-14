import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgMusic(props: SVGProps<SVGSVGElement>) {
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
        d="M7.848 3.704A1 1 0 0 0 7 4.693V15.17a3 3 0 1 0 1.996 2.664H9V7.527l9-1.385v7.029a3 3 0 1 0 1.995 2.664H20V3a1 1 0 0 0-1.152-.988l-11 1.692Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgMusic)
