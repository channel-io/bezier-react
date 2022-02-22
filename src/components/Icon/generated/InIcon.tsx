import * as React from 'react'
import { SVGProps } from 'react'

function SvgInIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M9.672 16.121 12.792 13H2v-2h10.794L9.672 7.878l1.414-1.414 4.475 4.475a1.5 1.5 0 0 1 0 2.121l-4.475 4.475-1.414-1.414ZM12 4h8v16h-8v2h9a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-9v2Z"
      />
    </svg>
  )
}

export default SvgInIcon
