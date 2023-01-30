import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgComment(props: SVGProps<SVGSVGElement>) {
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
        d="M3 7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-6.948a2 2 0 0 0-1.25.438l-3.365 2.693C4.455 22.917 3 22.217 3 20.96V7Zm4-2a2 2 0 0 0-2 2v12.92l2.554-2.044A4 4 0 0 1 10.052 17H17a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Zm1 4a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgComment)
