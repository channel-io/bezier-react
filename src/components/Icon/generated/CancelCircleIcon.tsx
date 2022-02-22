import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgCancelCircleIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M4 12c0 4.411 3.59 8 8 8 4.411 0 8-3.589 8-8 0-4.41-3.589-8-8-8-4.41 0-8 3.59-8 8Zm8 10C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm0-8.584 3.44 3.442 1.417-1.417-3.441-3.44 3.44-3.441-1.415-1.416L12 10.584l-3.441-3.44L7.143 8.56l3.44 3.44-3.44 3.44 1.417 1.417 3.44-3.44Z"
      />
    </svg>
  )
}

export default createIcon(SvgCancelCircleIcon)
