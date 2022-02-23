import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgArrowLeftUpIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M20.707 19.293 7.414 6H20V4H5.5C4.673 4 4 4.673 4 5.5V20h2V7.414l13.293 13.293 1.414-1.414Z"
      />
    </svg>
  )
}

export default createIcon(SvgArrowLeftUpIcon)
