import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgOutIcon(props: SVGProps<SVGSVGElement>) {
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
        d="m18.793 13-3.121 3.121 1.414 1.414 4.475-4.475a1.5 1.5 0 0 0 0-2.121l-4.475-4.475-1.414 1.414L18.794 11H8v2h10.793ZM4 4h8V2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h9v-2H4V4Z"
      />
    </svg>
  )
}

export default createIcon(SvgOutIcon)
