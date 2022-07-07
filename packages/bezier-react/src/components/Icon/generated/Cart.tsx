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
        d="M2 5h2.775l.935 8.44A4 4 0 0 0 9.686 17h6.629a4 4 0 0 0 3.975-3.558l.58-5.221A2 2 0 0 0 18.883 6H6.898l-.135-1.22A2 2 0 0 0 4.775 3H2v2Zm5.698 8.22L7.119 8h11.764l-.58 5.22A2 2 0 0 1 16.315 15h-6.63a2 2 0 0 1-1.987-1.78ZM8 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgCart)
