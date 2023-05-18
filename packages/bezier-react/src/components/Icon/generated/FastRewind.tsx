import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgFastRewind(props: SVGProps<SVGSVGElement>) {
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
        d="m11.999 13.034 8.834 5.885a.75.75 0 0 0 1.166-.625V5.707a.75.75 0 0 0-1.166-.625l-8.834 5.886V5.706a.75.75 0 0 0-1.166-.625l-9.449 6.295a.75.75 0 0 0 0 1.248l9.449 6.295a.75.75 0 0 0 1.166-.625v-5.26Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgFastRewind)
