import * as React from 'react'
import { SVGProps } from 'react'
import createBezierIcon from '../createBezierIcon'

function SvgClip(props: SVGProps<SVGSVGElement>) {
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
        d="M20.486 13.487a1 1 0 0 0-1.414 0l-5.537 5.537a5 5 0 0 1-7.07-7.07l7.075-7.077a2.992 2.992 0 1 1 4.233 4.232l-7.16 7.159a1.005 1.005 0 1 1-1.423-1.422l5.62-5.62a1 1 0 1 0-1.414-1.415l-5.62 5.62a3.005 3.005 0 0 0 0 4.252 3.005 3.005 0 0 0 4.252-.001l7.16-7.159a4.993 4.993 0 1 0-7.062-7.06L5.05 10.54a7 7 0 0 0 9.9 9.9l5.536-5.538a1 1 0 0 0 0-1.414Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgClip)
