import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'

function SvgRepeat(props: SVGProps<SVGSVGElement>) {
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
        d="M14.671 10.536a1 1 0 0 1 0-1.414L15.794 8H4v7a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1h12.793l-1.121-1.121a1 1 0 1 1 1.413-1.414l2.476 2.475a1.501 1.501 0 0 1 0 2.12l-2.476 2.476a1 1 0 0 1-1.414 0Z"
      />
      <path
        fill="currentColor"
        d="M20 9a1 1 0 1 1 2 0v8a1 1 0 0 1-1 1H8.207l1.121 1.122a1 1 0 0 1-1.414 1.414L5.44 18.061a1.502 1.502 0 0 1 0-2.122l2.475-2.475a1 1 0 0 1 1.414 1.414L8.208 16H20V9Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgRepeat)
