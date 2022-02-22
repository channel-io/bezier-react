import * as React from 'react'
import { SVGProps } from 'react'

function SvgFolder(props: SVGProps<SVGSVGElement>) {
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
        d="M20 17H4v-7h16v7Zm0-9H4V5h5.436l.974 1.957H20V8ZM3.5 19h17c.827 0 1.5-.673 1.5-1.5V6.457c0-.827-.673-1.5-1.5-1.5h-8.852l-.559-1.125A1.493 1.493 0 0 0 9.746 3H3.5C2.673 3 2 3.673 2 4.5v13c0 .827.673 1.5 1.5 1.5Z"
      />
    </svg>
  )
}

export default SvgFolder
