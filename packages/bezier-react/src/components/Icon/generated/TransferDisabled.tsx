import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
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
        d="M2.808 4.215a1 1 0 0 1 1.42-1.408L7.421 6H17V3.931a.8.8 0 0 1 1.366-.565l2.927 2.927a1 1 0 0 1 0 1.414l-2.927 2.927A.8.8 0 0 1 17 10.07V8H9.421L21.2 19.778a1 1 0 0 1-1.408 1.42L2.808 4.215ZM13.178 16H7v-2.069a.8.8 0 0 0-1.366-.565l-2.927 2.927a1 1 0 0 0 0 1.414l2.927 2.927A.8.8 0 0 0 7 20.068V18h8.179l-2-2Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgTransferDisabled)
