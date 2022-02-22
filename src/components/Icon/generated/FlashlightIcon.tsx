import * as React from 'react'
import { SVGProps } from 'react'

function SvgFlashlightIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M11 4h2V1h-2v3Zm-7.707.707 2 2 1.414-1.414-2-2-1.414 1.414Zm14 .586 1.414 1.414 2-2-1.414-1.414-2 2ZM7 8h10a1 1 0 0 1 1 1v2.667c0 .216-.07.426-.2.6l-2.6 3.466a1 1 0 0 0-.2.6V21a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4.667a1 1 0 0 0-.2-.6l-2.6-3.466c-.13-.174-.2-.384-.2-.6V9a1 1 0 0 1 1-1Z"
      />
    </svg>
  )
}

export default SvgFlashlightIcon
