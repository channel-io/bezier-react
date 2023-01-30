import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgEducation(props: SVGProps<SVGSVGElement>) {
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
        d="M11.106 2.211a2 2 0 0 1 1.788 0l9.122 4.561A1.786 1.786 0 0 1 23 8.585V14a1 1 0 1 1-2 0v-3.5l-1 .5v5.939a2 2 0 0 1-1.092 1.782l-6 3.058a2 2 0 0 1-1.816 0l-6-3.058A2 2 0 0 1 4 16.939V11L1.984 9.992c-1.327-.663-1.327-2.557 0-3.22l9.122-4.56Zm1.788 12.342L18 12v4.939l-6 3.058-6-3.058V12l5.106 2.553a2 2 0 0 0 1.788 0Zm7.87-6.171L12 4 3.236 8.382 12 12.764l8.764-4.382Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgEducation)
