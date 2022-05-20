import * as React from 'react'
import { SVGProps } from 'react'
import createBezierIcon from '../createBezierIcon'

function SvgAsterisk(props: SVGProps<SVGSVGElement>) {
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
        d="M12 2.5a1 1 0 0 1 1 1v6.768l5.861-3.384a1 1 0 1 1 1 1.732L14 12l5.861 3.384a1 1 0 1 1-1 1.732L13 13.732V20.5a1 1 0 1 1-2 0v-6.768l-5.861 3.384a1 1 0 1 1-1-1.732L10 12 4.139 8.616a1 1 0 0 1 1-1.732L11 10.268V3.5a1 1 0 0 1 1-1Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgAsterisk)
