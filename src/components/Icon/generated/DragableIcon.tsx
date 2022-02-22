import * as React from 'react'
import { SVGProps } from 'react'

function SvgDragableIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M8 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm8 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm-5.5 5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm5.5 2.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm-5.5 5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM16 22a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
      />
    </svg>
  )
}

export default SvgDragableIcon
