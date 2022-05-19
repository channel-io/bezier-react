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
        d="m18.793 13-2.414 2.414a1 1 0 0 0 1.414 1.414l3.768-3.768a1.5 1.5 0 0 0 0-2.121l-3.768-3.768a1 1 0 1 0-1.414 1.414L18.794 11H9a1 1 0 1 0 0 2h9.793Z"
      />
      <path
        fill="currentColor"
        d="M2 6a4 4 0 0 1 4-4h5a1 1 0 1 1 0 2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5a1 1 0 1 1 0 2H6a4 4 0 0 1-4-4V6Z"
      />
    </svg>
  )
}

export default createIcon(SvgOutIcon)
