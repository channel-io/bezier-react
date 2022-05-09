import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgLaptopIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M4 17h16V7H4v10Zm18 0V6.5c0-.827-.673-1.5-1.5-1.5h-17C2.673 5 2 5.673 2 6.5V17H0v2h24v-2h-2Z"
      />
    </svg>
  )
}

export default createIcon(SvgLaptopIcon)
