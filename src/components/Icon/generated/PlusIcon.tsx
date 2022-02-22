import * as React from 'react'
import { SVGProps } from 'react'

function SvgPlusIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M13 3h-2v8H3v2h8v8h2v-8h8v-2h-8V3Z"
      />
    </svg>
  )
}

export default SvgPlusIcon
