import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'

function SvgTimeElapsed(props: SVGProps<SVGSVGElement>) {
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
        d="M12 2h-1v4h2V4.062c3.941.494 7 3.866 7 7.938 0 4.411-3.589 8-8 8-4.41 0-8-3.589-8-8 0-1.8.59-3.509 1.68-4.906l4.394 4.394A1.967 1.967 0 0 0 10 12a2 2 0 1 0 2-2c-.178 0-.347.031-.51.074L5.635 4.221l-.707.708A9.934 9.934 0 0 0 2 12c0 5.514 4.486 10 10 10s10-4.486 10-10S17.514 2 12 2Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgTimeElapsed)
