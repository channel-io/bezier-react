import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgZoomOutIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M4 10c0 3.31 2.691 6 6 6 3.31 0 6-2.69 6-6 0-3.309-2.69-6-6-6-3.309 0-6 2.691-6 6Zm12.312 4.897L22.414 21 21 22.414l-6.103-6.102A7.948 7.948 0 0 1 10 18c-4.41 0-8-3.589-8-8 0-4.41 3.59-8 8-8 4.411 0 8 3.59 8 8a7.948 7.948 0 0 1-1.688 4.897ZM14 11H6V9h8v2Z"
      />
    </svg>
  )
}

export default createIcon(SvgZoomOutIcon)
