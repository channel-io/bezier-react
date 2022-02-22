import * as React from 'react'
import { SVGProps } from 'react'

function SvgQrCode(props: SVGProps<SVGSVGElement>) {
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
        d="M5 5h4v4H5V5ZM3 5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5Zm2 10h4v4H5v-4Zm-2 0a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4ZM19 5h-4v4h4V5Zm-4-2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-4Zm-.5 10a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm1 4a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm-1 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm3.5-3.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm1.5 3.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"
      />
    </svg>
  )
}

export default SvgQrCode
