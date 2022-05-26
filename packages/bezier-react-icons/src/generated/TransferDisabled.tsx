import * as React from 'react'
import { SVGProps } from 'react'
import createBezierIcon from '../createBezierIcon'

function SvgTransferDisabled(props: SVGProps<SVGSVGElement>) {
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
        d="M2.808 4.215a1 1 0 0 1 1.42-1.408L7.421 6H17V2.966a.4.4 0 0 1 .683-.283l3.963 3.963a.5.5 0 0 1 0 .708l-3.963 3.963a.4.4 0 0 1-.683-.283V8H9.421L21.2 19.778a1 1 0 0 1-1.408 1.42L2.808 4.216ZM13.178 16H7v-3.034a.4.4 0 0 0-.683-.283l-3.963 3.963a.5.5 0 0 0 0 .708l3.963 3.963A.4.4 0 0 0 7 21.034V18h8.179l-2-2Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgTransferDisabled)
