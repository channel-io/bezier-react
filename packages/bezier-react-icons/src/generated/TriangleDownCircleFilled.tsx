import * as React from 'react'
import { SVGProps } from 'react'
import createBezierIcon from '../createBezierIcon'

function SvgTriangleDownCircleFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M12.212 15.831a.298.298 0 0 1-.23-.108l-4.36-5.23a.3.3 0 0 1 .23-.493h8.72a.3.3 0 0 1 .23.492l-4.36 5.231a.297.297 0 0 1-.23.108ZM12 2.001C6.478 2 2 6.476 2 12c0 5.522 4.477 10 10 10 5.522 0 10-4.478 10-10 0-5.524-4.478-10-10-10Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgTriangleDownCircleFilled)
