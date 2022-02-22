import * as React from 'react'
import { SVGProps } from 'react'

function SvgPeopleIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M8 5A2 2 0 1 1 4 5 2 2 0 0 1 8 5ZM5 16H4V8h4v8H7v5H5v-5Zm5 0h1v5h2v-5h1V8h-4v8Zm7 0h-1V8h4v8h-1v5h-2v-5Zm-5-9A2 2 0 1 0 12 3 2 2 0 0 0 12 7Zm8-2A2 2 0 1 1 16 5 2 2 0 0 1 20 5Z"
      />
    </svg>
  )
}

export default SvgPeopleIcon
