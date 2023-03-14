import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgCameraFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M16.583 4.471a2 2 0 0 0-1.715-.971H9.132a2 2 0 0 0-1.715.971l-.626 1.043A1 1 0 0 1 5.934 6H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-.934a1 1 0 0 1-.857-.486l-.626-1.043ZM12 18a5.506 5.506 0 0 1-5.5-5.5C6.5 9.467 8.967 7 12 7s5.5 2.467 5.5 5.5c0 3.032-2.467 5.5-5.5 5.5Zm-4-5.5a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgCameraFilled)
