import * as React from 'react'
import { SVGProps } from 'react'
import createBezierIcon from '../createBezierIcon'

function SvgWeatherSnow(props: SVGProps<SVGSVGElement>) {
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
        d="m20.36 14.104-1-1.732-2.358 1.36L14 12l3.002-1.732 2.357 1.36 1-1.731-1.357-.784 2.158-1.246-1-1.733-2.159 1.246V5.813h-2v2.723l-3 1.732V6.802l2.357-1.36-1-1.733L13 4.494V2h-2v2.494l-1.358-.785-1 1.733L11 6.802v3.466L8 8.536V5.813H6V7.38L3.84 6.134l-1 1.733L5 9.113l-1.359.784 1 1.732 2.357-1.361L10 12l-3.002 1.733-2.357-1.361-1 1.732L5 14.888l-2.16 1.246 1 1.733L6 16.62v1.568h2v-2.723L11 13.733v3.466l-2.358 1.36 1 1.732L11 19.507V22h2v-2.493l1.358.784 1-1.732L13 17.199v-3.466l3.001 1.732v2.723h2V16.62l2.16 1.247 1-1.733-2.159-1.246 1.357-.784Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgWeatherSnow)
