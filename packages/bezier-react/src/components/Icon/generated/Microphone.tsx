import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgMicrophone(props: SVGProps<SVGSVGElement>) {
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
        d="M14 13V6a2 2 0 1 0-4 0v7a2 2 0 1 0 4 0ZM12 2a4 4 0 0 0-4 4v7a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4Zm-1 18.938a8.004 8.004 0 0 1-6.938-6.94C3.993 13.45 4.448 13 5 13c.552 0 .991.451 1.082.996a6.002 6.002 0 0 0 11.836 0c.09-.545.53-.996 1.082-.996s1.007.45.938.998A8.004 8.004 0 0 1 13 20.938V23h-2v-2.062Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgMicrophone)
