import * as React from 'react'
import { SVGProps } from 'react'

function SvgProfileIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M4 17V7h16v10H4ZM3.5 5h17c.827 0 1.5.673 1.5 1.5v11c0 .827-.673 1.5-1.5 1.5h-17c-.827 0-1.5-.673-1.5-1.5v-11C2 5.673 2.673 5 3.5 5Zm6.5 6A2 2 0 1 1 6 11 2 2 0 0 1 10 11Zm2 0h6V9h-6v2Zm6 4h-6v-2h6v2Z"
      />
    </svg>
  )
}

export default SvgProfileIcon
