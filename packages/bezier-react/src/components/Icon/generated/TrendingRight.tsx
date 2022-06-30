import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'

function SvgTrendingRight(props: SVGProps<SVGSVGElement>) {
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
        d="m17.849 11.634-5.167-5.166a.4.4 0 0 0-.683.283v3.248H6.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5H12v3.249a.4.4 0 0 0 .682.283l5.167-5.165a.518.518 0 0 0 0-.732Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgTrendingRight)
