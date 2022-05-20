import * as React from 'react'
import { SVGProps } from 'react'
import createBezierIcon from '../createBezierIcon'

function SvgTrash(props: SVGProps<SVGSVGElement>) {
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
        d="M14 4h-4v1h4V4Zm2 1h4v2h-1v11a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V7H4V5h4V3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5V5ZM7 18V7h10v11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2Zm2-8v7h2v-7H9Zm4 7v-7h2v7h-2Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgTrash)
