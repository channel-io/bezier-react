import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgYoutubeIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M10.146 14.947v-5.99l4.909 2.995-4.91 2.995Zm11.76-5.92a3.993 3.993 0 0 0-3.561-3.715A63.235 63.235 0 0 0 12 5c-2.21 0-4.34.109-6.345.311a3.995 3.995 0 0 0-3.562 3.716 45.997 45.997 0 0 0 0 5.85 3.994 3.994 0 0 0 3.562 3.715 63.23 63.23 0 0 0 6.345.312c2.209 0 4.34-.109 6.345-.311a3.995 3.995 0 0 0 3.562-3.716 45.894 45.894 0 0 0 0-5.85Z"
      />
    </svg>
  )
}

export default createIcon(SvgYoutubeIcon)
