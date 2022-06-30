import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'

function SvgAppsAdd(props: SVGProps<SVGSVGElement>) {
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
        d="M9 9H5V5h4v4ZM3.5 3h7a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5ZM19 9h-4V5h4v4Zm1.5 2h-7a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5ZM5 19h4v-4H5v4Zm5.5-6h-7a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5Zm7.5 3h3v2h-3v3h-2v-3h-3v-2h3v-3h2v3Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgAppsAdd)
