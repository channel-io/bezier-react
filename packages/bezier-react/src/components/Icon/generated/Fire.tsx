import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'

function SvgFire(props: SVGProps<SVGSVGElement>) {
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
        d="M12 18c-2.206 0-4-1.794-4-4 0-.875.188-1.494.611-2.106.178.442.408.87.69 1.274 1.236 1.782 3.344 2.89 5.5 2.89a6.6 6.6 0 0 0 .648-.033A4.004 4.004 0 0 1 12 18Zm8-4c0-4.756-3-8.046-3-8.046.637 2.377.481 3.927-.066 4.93-1.19 2.18-4.586.512-3.724-1.818 1.591-4.3.431-4.973-1.21-8.066 0 0 .151 1.724-3.406 5.255-.234.233-.472.454-.712.67C5.96 8.657 4 10.024 4 14c0 4.411 3.59 8 8 8 4.411 0 8-3.589 8-8Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgFire)
