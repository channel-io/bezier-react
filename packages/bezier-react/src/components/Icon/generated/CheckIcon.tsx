import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgCheckIcon(props: SVGProps<SVGSVGElement>) {
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
        d="m9.071 16.142-5.657-5.657L2 11.899l7.071 7.071L21.553 6.487 20.14 5.073 9.071 16.142Z"
      />
    </svg>
  )
}

export default createIcon(SvgCheckIcon)
