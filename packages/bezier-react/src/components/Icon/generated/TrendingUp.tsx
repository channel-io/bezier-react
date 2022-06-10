import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'

function SvgTrendingUp(props: SVGProps<SVGSVGElement>) {
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
        d="m11.634 6.152-5.166 5.166a.4.4 0 0 0 .283.683H10V17.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V12h3.25a.4.4 0 0 0 .282-.682l-5.165-5.166a.518.518 0 0 0-.732 0Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgTrendingUp)
