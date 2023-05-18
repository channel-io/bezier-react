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
        d="M6.343.707a1 1 0 0 1 0 1.414L3.515 4.95A1 1 0 0 1 2.1 3.536L4.93.707a1 1 0 0 1 1.414 0Zm11.314 0a1 1 0 0 1 1.414 0L21.9 3.536a1 1 0 0 1-1.414 1.414L17.657 2.12a1 1 0 0 1 0-1.414ZM4 12.021a8 8 0 1 0 16 0 8 8 0 0 0-16 0Zm8-10c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10Zm0 4a1 1 0 0 1 1 1v4.315l2.64 1.352a1 1 0 0 1-.912 1.78l-3.184-1.63a1 1 0 0 1-.544-.89V7.02a1 1 0 0 1 1-1Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgSnooze)
