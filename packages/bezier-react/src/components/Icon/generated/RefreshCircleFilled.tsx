import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgRefreshCircleFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M18.275 10.097a.313.313 0 0 1-.313.313H14.43a.313.313 0 0 1-.22-.535l1.313-1.314A4.987 4.987 0 0 0 12 7.114a5.029 5.029 0 0 0-5.023 5.023A5.029 5.029 0 0 0 12 17.16a5.028 5.028 0 0 0 5.023-5.022h1.25A6.28 6.28 0 0 1 12 18.41a6.28 6.28 0 0 1-6.273-6.272A6.28 6.28 0 0 1 12 5.864a6.23 6.23 0 0 1 4.408 1.812l1.331-1.332a.314.314 0 0 1 .536.222v3.531ZM12 2C6.477 2 2 6.477 2 12c0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgRefreshCircleFilled)
