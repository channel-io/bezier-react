import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'

function SvgKeypad(props: SVGProps<SVGSVGElement>) {
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
        d="M7.5 5.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm0 13.5a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-2.25-4.5a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Zm9-9a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0ZM12 21a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Zm2.25-9a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm4.5-4.5a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5ZM21 18.75a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-2.25-4.5a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgKeypad)
