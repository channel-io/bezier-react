import * as React from 'react'
import { SVGProps } from 'react'

function SvgMicrophoneIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M14 13V6a2 2 0 1 0-4 0v7a2 2 0 1 0 4 0ZM12 2a4 4 0 0 0-4 4v7a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4Zm-1 18.938A8.001 8.001 0 0 1 4 13h2a6 6 0 0 0 12 0h2a8.001 8.001 0 0 1-7 7.938V23h-2v-2.062Z"
      />
    </svg>
  )
}

export default SvgMicrophoneIcon
