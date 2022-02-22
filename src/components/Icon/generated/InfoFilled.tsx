import * as React from 'react'
import { SVGProps } from 'react'

function SvgInfoFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M12 9A1.5 1.5 0 1 1 12 6 1.5 1.5 0 0 1 12 9Zm-1 9h2v-8h-2v8Zm1-16C6.486 2 2 6.486 2 12s4.486 10 10 10c5.515 0 10-4.486 10-10S17.515 2 12 2Z"
      />
    </svg>
  )
}

export default SvgInfoFilled
