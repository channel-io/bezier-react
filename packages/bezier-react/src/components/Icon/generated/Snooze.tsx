import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'

function SvgSnooze(props: SVGProps<SVGSVGElement>) {
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
        d="M7.05 1.414 2.808 5.657 1.393 4.243 5.636 0 7.05 1.414ZM18.364 0l4.243 4.243-1.415 1.414-4.242-4.243L18.364 0ZM4 12.02a8 8 0 1 0 16 0 8 8 0 0 0-16 0Zm8-10c-5.523 0-10 4.478-10 10 0 5.524 4.477 10 10 10s10-4.476 10-10c0-5.522-4.477-10-10-10Zm-1 10.54V6.02h2v5.316l3.53 1.808-.912 1.78L11 12.559Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgSnooze)
