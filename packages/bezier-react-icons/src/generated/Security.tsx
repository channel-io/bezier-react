import * as React from 'react'
import { SVGProps } from 'react'
import createBezierIcon from '../createBezierIcon'

function SvgSecurity(props: SVGProps<SVGSVGElement>) {
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
        d="M7.086 11.639 8.5 10.225l2.36 2.361 4.726-4.725L17 9.275l-6.14 6.14-3.774-3.776Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="m21 5.307-9-3.375-9 3.375V10c0 4.669 2.638 8.937 6.814 11.025L12 22.118l2.186-1.093A12.326 12.326 0 0 0 21 10V5.307ZM5 10V6.693l7-2.625 7 2.625V10c0 3.911-2.21 7.487-5.708 9.236L12 19.882l-1.292-.646A10.326 10.326 0 0 1 5 10Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgSecurity)
