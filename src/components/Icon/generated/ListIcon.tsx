import * as React from 'react'
import { SVGProps } from 'react'

function SvgListIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M4.5 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM6 19a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM21 6H8V4h13v2ZM8 13h13v-2H8v2Zm13 7H8v-2h13v2Z"
      />
    </svg>
  )
}

export default SvgListIcon
