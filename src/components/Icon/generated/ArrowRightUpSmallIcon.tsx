import * as React from 'react'
import { SVGProps } from 'react'

function SvgArrowRightUpSmallIcon(props: SVGProps<SVGSVGElement>) {
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
        d="m14.59 8-8.9 8.9 1.415 1.414 8.892-8.893v7.58h2V7.5a1.5 1.5 0 0 0-1.5-1.5h-9.5v2h7.593Z"
      />
    </svg>
  )
}

export default SvgArrowRightUpSmallIcon
