import * as React from 'react'
import { SVGProps } from 'react'
import createBezierIcon from '../createBezierIcon'

function SvgArrowDown(props: SVGProps<SVGSVGElement>) {
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
        d="M3.285 12.163a1 1 0 0 1 1.413-.044l6.303 5.923L11 18V4a1 1 0 1 1 2 0v14c0 .023 0 .046-.002.069l6.33-5.95a1 1 0 0 1 1.37 1.458l-7.657 7.196a1.5 1.5 0 0 1-2.055 0L3.33 13.577a1 1 0 0 1-.044-1.414Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgArrowDown)
