import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgArchive(props: SVGProps<SVGSVGElement>) {
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
        d="M18.994 19h-14V9h14v10ZM20 5H4v2h16V5Zm.5-2c.827 0 1.5.673 1.5 1.5V9h-1.006v10.5c0 .827-.673 1.5-1.5 1.5h-15c-.827 0-1.5-.673-1.5-1.5V9H2V4.5C2 3.673 2.673 3 3.5 3h17Zm-6.006 10h-5v-2h5v2Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgArchive)
