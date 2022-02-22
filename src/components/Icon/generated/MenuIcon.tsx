import * as React from 'react'
import { SVGProps } from 'react'

function SvgMenuIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M3 6h18V4H3v2Zm0 7h18v-2H3v2Zm18 7H3v-2h18v2Z"
      />
    </svg>
  )
}

export default SvgMenuIcon
