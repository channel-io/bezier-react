import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgCrownFilled(props: SVGProps<SVGSVGElement>) {
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
        d="m2.27 7.89 1.362 9.534A3 3 0 0 0 6.602 20h10.796a3 3 0 0 0 2.97-2.576L21.73 7.89a1 1 0 0 0-1.437-1.035L16.79 8.604a1 1 0 0 1-1.28-.34l-2.678-4.017a1 1 0 0 0-1.664 0L8.49 8.265a1 1 0 0 1-1.28.34L3.707 6.853A1 1 0 0 0 2.27 7.89Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgCrownFilled)
