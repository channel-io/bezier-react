import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'

function SvgCart(props: SVGProps<SVGSVGElement>) {
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
        d="M7.895 15h10.21l.778-7H7.117l.778 7ZM6.611 3.444 6.895 6H20.56c.297 0 .53.26.497.556l-1.112 10a.498.498 0 0 1-.496.444H6.553a.5.5 0 0 1-.497-.444L4.772 5H3a1 1 0 1 1 0-2h3.114a.5.5 0 0 1 .497.444ZM8.001 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgCart)
