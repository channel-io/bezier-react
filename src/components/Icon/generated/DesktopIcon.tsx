import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgDesktopIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M4 14h16V6H4v8ZM20.5 4h-17C2.673 4 2 4.673 2 5.5v9c0 .827.673 1.5 1.5 1.5H11v2H8v2h8v-2h-3v-2h7.5c.827 0 1.5-.673 1.5-1.5v-9c0-.827-.673-1.5-1.5-1.5Z"
      />
    </svg>
  )
}

export default createIcon(SvgDesktopIcon)
