import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'

function SvgHeadsetOff(props: SVGProps<SVGSVGElement>) {
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
        d="M17.996 10.253c0-3.309-2.69-6-6-6-1.624 0-3.087.66-4.167 1.712l7.167 7.167v-1.379c0-.827.673-1.5 1.5-1.5h1.5Zm2 7a.984.984 0 0 1-.244.635l1.79 1.79a1 1 0 0 1-1.415 1.414L3.157 4.122a1 1 0 0 1 1.414-1.415L6.41 4.544a7.95 7.95 0 0 1 5.587-2.29c4.411 0 8 3.588 8 8v7Zm-14 1v1c0 .551.449 1 1 1h4a1 1 0 1 1 0 2h-4c-1.654 0-3-1.346-3-3v-9c0-1.14.243-2.222.675-3.204l1.56 1.56a5.949 5.949 0 0 0-.235 1.644h1.5c.827 0 1.5.673 1.5 1.5v5c0 .827-.673 1.5-1.5 1.5h-1.5Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgHeadsetOff)
