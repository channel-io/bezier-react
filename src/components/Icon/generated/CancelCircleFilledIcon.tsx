import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgCancelCircleFilledIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M15.44 16.858 12 13.416l-3.44 3.44-1.416-1.416 3.44-3.44-3.441-3.44 1.416-1.416 3.44 3.44 3.442-3.44 1.416 1.416L13.416 12l3.44 3.441-1.415 1.417ZM19.08 4.92c-3.894-3.893-10.265-3.893-14.16 0-3.893 3.895-3.893 10.265 0 14.16 3.895 3.894 10.266 3.894 14.16 0s3.894-10.265 0-14.16Z"
      />
    </svg>
  )
}

export default createIcon(SvgCancelCircleFilledIcon)
