import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgErrorTriangleFilledIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M8.987 4.1c1.354-2.293 4.671-2.293 6.026 0l6.867 11.62c1.378 2.333-.303 5.28-3.014 5.28H5.134c-2.71 0-4.392-2.947-3.014-5.28L8.987 4.1ZM12 18.8a1.4 1.4 0 1 1 0-2.801 1.4 1.4 0 0 1 0 2.801ZM12 6a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1Z"
      />
    </svg>
  )
}

export default createIcon(SvgErrorTriangleFilledIcon)
