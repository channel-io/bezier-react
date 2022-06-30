import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'

function SvgPackage(props: SVGProps<SVGSVGElement>) {
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
        d="M13 2.577a2 2 0 0 0-2 0L4 6.62A2 2 0 0 0 3 8.35v8.083a2 2 0 0 0 1 1.732l7 4.041a2 2 0 0 0 2 0l7-4.041a2 2 0 0 0 1-1.732V8.35a2 2 0 0 0-1-1.732l-7-4.042Zm-3.07 2.8L12 4.182l6.304 3.64-2.106 1.21L9.93 5.378ZM7.94 6.526 5.696 7.822 12 11.447l2.25-1.294-6.31-3.627ZM4.89 9.665v6.833L11 20.026v-6.847L4.89 9.665ZM13 20.025l6.11-3.527V9.665L13 13.18v6.846Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgPackage)
