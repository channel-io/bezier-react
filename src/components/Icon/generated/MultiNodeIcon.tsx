import * as React from 'react'
import { SVGProps } from 'react'

function SvgMultiNodeIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M12 2a3 3 0 0 0-1 5.83V11H6a3 3 0 0 0-3 3v2.17a3.001 3.001 0 1 0 2 0V14a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2.17a3.001 3.001 0 1 0 2 0V14a3 3 0 0 0-3-3h-5V7.83A3.001 3.001 0 0 0 12 2Z"
      />
    </svg>
  )
}

export default SvgMultiNodeIcon
