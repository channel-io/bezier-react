import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgPerson(props: SVGProps<SVGSVGElement>) {
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
        d="M7.5 6.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Zm7 0C14.5 5.122 13.378 4 12 4a2.503 2.503 0 0 0-2.5 2.5C9.5 7.878 10.621 9 12 9c1.378 0 2.5-1.122 2.5-2.5ZM2.062 20.876C2.622 15.882 6.857 12 12 12c5.143 0 9.38 3.882 9.938 8.876A1.007 1.007 0 0 1 20.944 22H3.056c-.6 0-1.06-.527-.994-1.124ZM19.75 20A7.99 7.99 0 0 0 12 14a7.99 7.99 0 0 0-7.75 6h15.5Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgPerson)
