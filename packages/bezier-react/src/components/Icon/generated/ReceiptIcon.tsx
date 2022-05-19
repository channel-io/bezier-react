import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgReceiptIcon(props: SVGProps<SVGSVGElement>) {
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
        d="m15.997 19.882-2.003-1-1.999 1-2-1-1.998 1L7 19.383V4.001L17 4v15.382l-1.003.5ZM5 20.617l2.997 1.501 1.998-1 2 1 2-1 2.002 1 3.003-1.5V3.501a1.5 1.5 0 0 0-1.5-1.5L6.5 2A1.5 1.5 0 0 0 5 3.5v17.117ZM15 10H9v2h6v-2Zm-6 4h6v2H9v-2Zm6-8H9v2h6V6Z"
      />
    </svg>
  )
}

export default createIcon(SvgReceiptIcon)
