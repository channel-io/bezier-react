import * as React from 'react'
import { SVGProps } from 'react'

function SvgMenuUnfold(props: SVGProps<SVGSVGElement>) {
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
        d="M3.016 6h18V4h-18v2ZM12 13h9v-2h-9v2Zm9.016 7h-9v-2h9v2Z"
      />
    </svg>
  )
}

export default SvgMenuUnfold
