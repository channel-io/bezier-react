import * as React from 'react'
import { SVGProps } from 'react'
import createBezierIcon from '../createBezierIcon'

function SvgPlane(props: SVGProps<SVGSVGElement>) {
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
        d="M10.5 3.5a1.5 1.5 0 0 1 3 0v5.833l8.055 5.37a1 1 0 0 1 .445.832v1.118a.25.25 0 0 1-.33.237l-8.17-2.723V18.5l1.354 1.354a.5.5 0 0 1 .146.353V22l-3-1-3 1v-1.793a.5.5 0 0 1 .146-.353L10.5 18.5v-4.333L2.33 16.89a.25.25 0 0 1-.33-.237v-1.118a1 1 0 0 1 .445-.832l8.055-5.37V3.5Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgPlane)
