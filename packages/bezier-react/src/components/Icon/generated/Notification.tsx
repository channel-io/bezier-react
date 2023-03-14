import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgNotification(props: SVGProps<SVGSVGElement>) {
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
        d="M4.6 12.545a8.332 8.332 0 0 0 1.257-4.4 6.144 6.144 0 0 1 12.29 0c0 1.554.435 3.078 1.258 4.4l2.352 3.775a1.1 1.1 0 0 1-.935 1.68h-4.82a4 4 0 1 1-8 0h-4.82a1.1 1.1 0 0 1-.932-1.684l2.35-3.77ZM10.001 18a2 2 0 1 0 4 0h-4Zm9.2-2-1.495-2.398a10.324 10.324 0 0 1-1.56-5.458 4.144 4.144 0 1 0-8.29 0c0 1.929-.54 3.819-1.56 5.458L4.803 16h14.398Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgNotification)
