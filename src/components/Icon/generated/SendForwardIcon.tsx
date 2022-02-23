import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgSendForwardIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M9.621 11.443 5.35 7h11.934L9.62 11.443ZM20.988 5H3c-.881 0-1.332 1.058-.72 1.693l6.27 6.521 2.453 8.706c.24.852 1.386.995 1.828.23l9.03-15.64.017-.031A1 1 0 0 0 20.988 5ZM18.26 8.745l-7.644 4.433 1.668 5.918L18.26 8.745Z"
      />
    </svg>
  )
}

export default createIcon(SvgSendForwardIcon)
