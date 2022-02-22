import * as React from 'react'
import { SVGProps } from 'react'

function SvgHeading(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="currentColor" d="M5 3h3v7.5h8V3h3v18h-3v-7.5H8V21H5V3Z" />
    </svg>
  )
}

export default SvgHeading
