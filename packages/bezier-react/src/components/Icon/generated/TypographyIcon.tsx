import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgTypographyIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M4 3a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0V6a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H8a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-1a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1a1 1 0 0 0 2 0V4a1 1 0 0 0-1-1H4Z"
      />
    </svg>
  )
}

export default createIcon(SvgTypographyIcon)
