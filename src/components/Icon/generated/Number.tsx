import * as React from 'react'
import { SVGProps } from 'react'

function SvgNumber(props: SVGProps<SVGSVGElement>) {
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
        d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7Zm14 0h-.5a3 3 0 0 0-3 3v.5a3 3 0 0 0 3 3h.5c.311 0 .611-.047.894-.135A2.334 2.334 0 0 1 14.667 15H13v2h1.667l.21-.005A4.334 4.334 0 0 0 19 12.667V10a3 3 0 0 0-3-3Zm0 4.5a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1h-.5a1 1 0 0 0-1 1v.5a1 1 0 0 0 1 1h.5ZM8.25 7a3.25 3.25 0 0 1 3.25 3.25v3.5a3.25 3.25 0 0 1-6.5 0v-3.5A3.25 3.25 0 0 1 8.25 7Zm0 2a1.25 1.25 0 0 0-1.244 1.122L7 10.25v3.5a1.25 1.25 0 0 0 2.494.128l.006-.128v-3.5C9.5 9.56 8.94 9 8.25 9Z"
      />
    </svg>
  )
}

export default SvgNumber
