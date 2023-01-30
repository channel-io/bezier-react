import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgLink(props: SVGProps<SVGSVGElement>) {
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
        d="M9.879 14.121a6 6 0 0 0 8.485 0l1.414-1.414a6 6 0 0 0-8.485-8.485l-.864.864A1 1 0 1 0 11.843 6.5l.864-.864a4 4 0 1 1 5.657 5.657l-1.414 1.414a4 4 0 0 1-5.657 0 1 1 0 1 0-1.414 1.414Z"
      />
      <path
        fill="currentColor"
        d="M14.121 9.879a6 6 0 0 0-8.485 0l-1.414 1.414a6 6 0 1 0 8.485 8.485l.864-.864a1 1 0 0 0-1.414-1.414l-.864.864a4 4 0 0 1-5.657-5.657l1.414-1.414a4 4 0 0 1 5.657 0 1 1 0 0 0 1.414-1.414Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgLink)
