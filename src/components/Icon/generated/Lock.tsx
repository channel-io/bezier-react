import * as React from 'react'
import { SVGProps } from 'react'

function SvgLock(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="currentColor" d="M10.998 18v-5h2v5h-2Z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.5 9H6V7a6 6 0 1 1 12 0v2h.5a1.5 1.5 0 0 1 1.5 1.5v10a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 20.5v-10A1.5 1.5 0 0 1 5.5 9ZM16 7v2H8V7a4 4 0 1 1 8 0Zm2 4v9H6v-9h12Z"
      />
    </svg>
  )
}

export default SvgLock
