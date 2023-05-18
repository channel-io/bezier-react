import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgFlashlight(props: SVGProps<SVGSVGElement>) {
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
        d="M11 3a1 1 0 1 0 2 0V1a1 1 0 0 0-2 0v2ZM5.121 5.536A1 1 0 0 0 6.535 4.12L5.121 2.707a1 1 0 1 0-1.414 1.414l1.414 1.415Zm12.586 0a1 1 0 0 1 0-1.415l1.414-1.414a1 1 0 1 1 1.415 1.414L19.12 5.536a1 1 0 0 1-1.414 0ZM7 8h10a1 1 0 0 1 1 1v2.667c0 .216-.07.426-.2.6l-2.6 3.466a1 1 0 0 0-.2.6V21a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4.667a1 1 0 0 0-.2-.6l-2.6-3.466c-.13-.174-.2-.384-.2-.6V9a1 1 0 0 1 1-1Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgFlashlight)
