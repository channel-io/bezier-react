import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgArrowDownSmall(props: SVGProps<SVGSVGElement>) {
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
        d="M12 5a1 1 0 0 0-1 1v9.586l-3.793-3.793a1 1 0 0 0-1.414 1.414l5.5 5.5a1 1 0 0 0 1.414 0l5.5-5.5a1 1 0 0 0-1.414-1.414L13 15.586V6a1 1 0 0 0-1-1Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgArrowDownSmall)
