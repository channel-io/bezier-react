import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgSearchIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M18 10a8 8 0 1 0-3.094 6.32L21 22.414 22.414 21l-6.094-6.094A7.965 7.965 0 0 0 18 10Zm-2 0a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"
      />
    </svg>
  )
}

export default createIcon(SvgSearchIcon)
