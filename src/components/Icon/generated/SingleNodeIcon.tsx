import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgSingleNodeIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M2 5a3 3 0 0 1 5.83-1H10a3 3 0 0 1 3 3v10a1 1 0 0 0 1 1h2.17a3.001 3.001 0 1 1 0 2H14a3 3 0 0 1-3-3V7a1 1 0 0 0-1-1H7.83A3.001 3.001 0 0 1 2 5Z"
      />
    </svg>
  )
}

export default createIcon(SvgSingleNodeIcon)
