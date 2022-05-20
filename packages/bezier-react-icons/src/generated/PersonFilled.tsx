import * as React from 'react'
import { SVGProps } from 'react'
import createBezierIcon from '../createBezierIcon'

function SvgPersonFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M16.487 6.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM2.001 21.478a.506.506 0 0 0 .507.522h18.959a.507.507 0 0 0 .507-.522c-.272-5.28-4.64-9.478-9.987-9.478S2.272 16.198 2 21.478Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgPersonFilled)
