import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgBroadcast(props: SVGProps<SVGSVGElement>) {
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
        d="M17.657 6.343A8 8 0 0 0 6.343 17.657 1 1 0 1 1 4.93 19.07c-3.905-3.905-3.905-10.237 0-14.142 3.905-3.905 10.237-3.905 14.142 0 3.905 3.905 3.905 10.237 0 14.142a1 1 0 0 1-1.414-1.414 8 8 0 0 0 0-11.314ZM9.172 9.172a4 4 0 1 1 5.656 5.656 1 1 0 0 0 1.415 1.415 6 6 0 1 0-8.486 0 1 1 0 1 0 1.415-1.415 4 4 0 0 1 0-5.656ZM11 13.732a2 2 0 1 1 2 0V21a1 1 0 1 1-2 0v-7.268Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgBroadcast)
