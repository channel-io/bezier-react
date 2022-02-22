import * as React from 'react'
import { SVGProps } from 'react'

function SvgTabletIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M7 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8l-2 2v5H7V5h12V4a2 2 0 0 0-2-2H7Z"
      />
      <path
        fill="currentColor"
        d="M10.412 17H9v-1.413l7.475-7.475 1.413 1.412L10.412 17ZM17.182 7.405l1.412 1.413 1.414-1.413a1 1 0 0 0-1.414-1.413l-1.412 1.413Z"
      />
    </svg>
  )
}

export default SvgTabletIcon
