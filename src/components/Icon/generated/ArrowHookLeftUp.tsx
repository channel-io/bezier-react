import * as React from 'react'
import { SVGProps } from 'react'

function SvgArrowHookLeftUp(props: SVGProps<SVGSVGElement>) {
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
        d="M14.5 8H5.207L9.18 4.026 7.766 2.612 2.44 7.94a1.502 1.502 0 0 0 0 2.122l5.327 5.326 1.414-1.414L5.207 10H14.5c2.481 0 4.5 2.02 4.5 4.5 0 2.481-2.019 4.5-4.5 4.5H10v2h4.5c3.584 0 6.5-2.916 6.5-6.5S18.084 8 14.5 8Z"
      />
    </svg>
  )
}

export default SvgArrowHookLeftUp
