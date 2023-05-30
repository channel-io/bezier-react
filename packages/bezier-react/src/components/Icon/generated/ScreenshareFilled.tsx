import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgScreenshareFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M6 4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4H6Zm1.293 8.707a1 1 0 0 1 0-1.414L10.586 8a2 2 0 0 1 2.828 0l3.293 3.293a1 1 0 0 1-1.414 1.414L13 10.414V17a1 1 0 1 1-2 0v-6.586l-2.293 2.293a1 1 0 0 1-1.414 0Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgScreenshareFilled)
