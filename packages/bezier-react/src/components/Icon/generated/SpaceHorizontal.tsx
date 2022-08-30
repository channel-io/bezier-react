import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'

function SvgSpaceHorizontal(props: SVGProps<SVGSVGElement>) {
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
        d="M2.707 12.707a1 1 0 0 1 0-1.414l2.927-2.927A.8.8 0 0 1 7 8.93V11h10V8.931a.8.8 0 0 1 1.366-.565l2.927 2.927a1 1 0 0 1 0 1.414l-2.927 2.927A.8.8 0 0 1 17 15.07V13H7v2.069a.8.8 0 0 1-1.366.565l-2.927-2.927Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgSpaceHorizontal)
