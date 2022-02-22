import * as React from 'react'
import { SVGProps } from 'react'

function SvgVolumeOffFilled(props: SVGProps<SVGSVGElement>) {
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
        d="m15 12.879 7.253 7.253-1.414 1.414L2.454 3.16l1.414-1.414 4.486 4.486 3.94-3.94C12.48 2.106 12.734 2 13 2h1a1 1 0 0 1 1 1v9.879ZM2 8a1 1 0 0 1 1-1h1.88L15 17.121V21a1 1 0 0 1-1 1h-1a.997.997 0 0 1-.707-.293L7.586 17H3a1 1 0 0 1-1-1V8Z"
      />
    </svg>
  )
}

export default SvgVolumeOffFilled
