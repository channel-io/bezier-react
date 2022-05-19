import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgArrowRightDownSmallIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M7.05 7.05a1 1 0 0 0 0 1.414l6.778 6.779H8.464a1 1 0 1 0 0 2h7.779a1 1 0 0 0 1-1V8.464a1 1 0 1 0-2 0v5.364L8.464 7.05a1 1 0 0 0-1.414 0Z"
      />
    </svg>
  )
}

export default createIcon(SvgArrowRightDownSmallIcon)
