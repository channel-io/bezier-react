import * as React from 'react'
import { SVGProps } from 'react'

function SvgSirenIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M11.007 1v3h2V1h-2ZM3.3 4.707l2 2 1.414-1.414-2-2L3.3 4.707ZM12.007 5a7 7 0 0 0-7 7v8h-1v2h16v-2h-1v-8a7 7 0 0 0-7-7Zm5.293.293 2-2 1.414 1.414-2 2L17.3 5.293ZM9 10a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-6a1 1 0 0 0-1-1Z"
      />
    </svg>
  )
}

export default SvgSirenIcon
