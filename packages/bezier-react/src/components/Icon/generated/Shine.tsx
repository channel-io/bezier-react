import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgShine(props: SVGProps<SVGSVGElement>) {
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
        d="M17.73 10.464a.25.25 0 0 1-.46 0L16.15 7.85l-2.614-1.12a.25.25 0 0 1 0-.46l2.614-1.12 1.12-2.614a.25.25 0 0 1 .46 0l1.12 2.614 2.614 1.12a.25.25 0 0 1 0 .46L18.85 7.85l-1.12 2.614ZM10.228 21.5a.25.25 0 0 1-.456 0l-2.272-5-5-2.272a.25.25 0 0 1 0-.456l5-2.272 2.272-5a.25.25 0 0 1 .456 0l2.272 5 5 2.272a.25.25 0 0 1 0 .456l-5 2.272-2.272 5Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgShine)
