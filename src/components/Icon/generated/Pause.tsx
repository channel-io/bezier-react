import * as React from 'react'
import { SVGProps } from 'react'

function SvgPause(props: SVGProps<SVGSVGElement>) {
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
        d="M5.5 21h4a.5.5 0 0 0 .5-.5v-17a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5v17a.5.5 0 0 0 .5.5Zm9 0h4a.5.5 0 0 0 .5-.5v-17a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5v17a.5.5 0 0 0 .5.5Z"
      />
    </svg>
  )
}

export default SvgPause
