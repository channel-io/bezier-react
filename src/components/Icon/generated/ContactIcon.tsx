import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgContactIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M19 20H9V4h10v16ZM5 20h2V4H5v16ZM19.5 2h-15C3.673 2 3 2.673 3 3.5v17c0 .827.673 1.5 1.5 1.5h15c.827 0 1.5-.673 1.5-1.5v-17c0-.827-.673-1.5-1.5-1.5ZM14 11.068A1.534 1.534 0 1 0 14 8a1.534 1.534 0 0 0 0 3.068Zm3.277 3.946h-6.555a.22.22 0 0 1-.222-.23 3.507 3.507 0 0 1 7 0 .22.22 0 0 1-.223.23Z"
      />
    </svg>
  )
}

export default createIcon(SvgContactIcon)
