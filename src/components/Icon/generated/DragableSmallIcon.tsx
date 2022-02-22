import * as React from 'react'
import { SVGProps } from 'react'

function SvgDragableSmallIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M9 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm2 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4-10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm2 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-2 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      />
    </svg>
  )
}

export default SvgDragableSmallIcon
