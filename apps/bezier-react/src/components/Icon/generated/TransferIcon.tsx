import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgTransferIcon(props: SVGProps<SVGSVGElement>) {
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
        d="m21.646 7.354-3.963 3.963a.4.4 0 0 1-.683-.283V8H5a1 1 0 0 1 0-2h12V2.966a.4.4 0 0 1 .683-.283l3.963 3.963a.5.5 0 0 1 0 .708ZM7 18v3.034a.4.4 0 0 1-.683.283l-3.963-3.963a.5.5 0 0 1 0-.708l3.963-3.963a.4.4 0 0 1 .683.283V16h12a1 1 0 1 1 0 2H7Z"
      />
    </svg>
  )
}

export default createIcon(SvgTransferIcon)
