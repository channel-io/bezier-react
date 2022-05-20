import * as React from 'react'
import { SVGProps } from 'react'
import createBezierIcon from '../createBezierIcon'

function SvgPeople(props: SVGProps<SVGSVGElement>) {
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
        d="M8 5A2 2 0 1 1 4 5 2 2 0 0 1 8 5ZM4 16h1v4a1 1 0 1 0 2 0v-4h1V9a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v7Zm6 0h1v4a1 1 0 1 0 2 0v-4h1V9a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v7Zm7 0h-1V9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h-1v4a1 1 0 1 1-2 0v-4Zm-5-9A2 2 0 1 0 12 3 2 2 0 0 0 12 7Zm8-2A2 2 0 1 1 16 5 2 2 0 0 1 20 5Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgPeople)
