import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgSwitchIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M9 4a8 8 0 1 0 0 16h6a8 8 0 1 0 0-16H9Zm6 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z"
      />
    </svg>
  )
}

export default createIcon(SvgSwitchIcon)
