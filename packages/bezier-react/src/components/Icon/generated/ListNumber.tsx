import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgListNumber(props: SVGProps<SVGSVGElement>) {
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
        d="M4.604 3.089A.75.75 0 0 1 5 3.75v5a.75.75 0 0 1-1.5 0V5.151l-.334.223a.75.75 0 0 1-.832-1.248l1.5-1a.75.75 0 0 1 .77-.037ZM8 5a1 1 0 0 0 1 1h11a1 1 0 1 0 0-2H9a1 1 0 0 0-1 1Zm1 8a1 1 0 1 1 0-2h11a1 1 0 1 1 0 2H9Zm0 7a1 1 0 1 1 0-2h11a1 1 0 1 1 0 2H9Zm-5.316-3.253a.555.555 0 1 1 .854.7L2.22 19.767a.75.75 0 0 0 .53 1.28h3a.75.75 0 1 0 0-1.5H4.56L5.6 18.508a2.055 2.055 0 1 0-3.163-2.593l-.31.465a.75.75 0 0 0 1.248.832l.31-.465Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgListNumber)
