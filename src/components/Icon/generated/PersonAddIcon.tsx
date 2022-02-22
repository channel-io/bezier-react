import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgPersonAddIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M17.998 6V3h2v3h3v2h-3v3h-2V8h-3V6h3Zm-3.384 2.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM3.031 20.476a8 8 0 0 1 15.966 0 .504.504 0 0 1-.506.524H3.537a.504.504 0 0 1-.506-.524Z"
      />
    </svg>
  )
}

export default createIcon(SvgPersonAddIcon)
