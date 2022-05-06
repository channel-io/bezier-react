import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgCallMissedIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M10 2v2H6.45L12 9.55l6.256-6.257 1.415 1.414-6.633 6.633a18.383 18.383 0 0 1 9.883 3.559l.404.297a.43.43 0 0 1 .09.602l-1.411 1.917-.157.212a1.872 1.872 0 0 1-2.403.534l-2.297-1.251a1.872 1.872 0 0 1-.976-1.644V13.72a16.386 16.386 0 0 0-8.341-.001v1.847c0 .685-.375 1.316-.977 1.644l-2.297 1.25a1.871 1.871 0 0 1-2.403-.533l-1.57-2.13a.431.431 0 0 1 .092-.601l.4-.295a18.384 18.384 0 0 1 9.887-3.561L5 5.378V9H3V4a2 2 0 0 1 2-2h5Z"
      />
    </svg>
  )
}

export default createIcon(SvgCallMissedIcon)
