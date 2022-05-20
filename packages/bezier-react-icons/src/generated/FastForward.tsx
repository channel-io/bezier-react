import * as React from 'react'
import { SVGProps } from 'react'
import createBezierIcon from '../createBezierIcon'

function SvgFastForward(props: SVGProps<SVGSVGElement>) {
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
        d="m12 13.034-8.834 5.885A.75.75 0 0 1 2 18.294V5.707a.75.75 0 0 1 1.166-.625L12 10.967V5.706a.75.75 0 0 1 1.166-.625l9.448 6.295a.75.75 0 0 1 0 1.248l-9.448 6.295A.75.75 0 0 1 12 18.294v-5.26Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgFastForward)
