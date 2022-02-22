import * as React from 'react'
import { SVGProps } from 'react'

function SvgBoldIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M5 3h8.5a5.5 5.5 0 0 1 4.672 8.405A5.5 5.5 0 0 1 14.5 21H5V3Zm4 14v-3h5.5a1.5 1.5 0 0 1 0 3H9ZM9 7v3h4.5a1.5 1.5 0 1 0 0-3H9Z"
      />
    </svg>
  )
}

export default SvgBoldIcon
