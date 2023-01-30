import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgSecurityPerson(props: SVGProps<SVGSVGElement>) {
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
        d="M12 11.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM8 15.739c-.009.141.111.261.254.261h7.492c.143 0 .263-.12.253-.261A4.004 4.004 0 0 0 12.002 12a4.005 4.005 0 0 0-4 3.739Z"
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
export default createBezierIcon(SvgSecurityPerson)
