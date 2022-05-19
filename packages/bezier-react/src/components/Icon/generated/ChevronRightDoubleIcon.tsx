import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgChevronRightDoubleIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M6.76 4.35a1 1 0 0 0-1.52 1.3L10.684 12 5.24 18.35a1 1 0 0 0 1.518 1.3l6-7a1 1 0 0 0 0-1.3l-6-7Z"
      />
      <path
        fill="currentColor"
        d="M14.76 4.35a1 1 0 0 0-1.52 1.3L18.684 12l-5.442 6.35a1 1 0 0 0 1.518 1.3l6-7a1 1 0 0 0 0-1.3l-6-7Z"
      />
    </svg>
  )
}

export default createIcon(SvgChevronRightDoubleIcon)
