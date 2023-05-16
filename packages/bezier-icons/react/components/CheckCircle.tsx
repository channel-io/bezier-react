import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgCheckCircle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Zm-12.029-.776 2.783 2.672 5.651-5.31 1.37 1.458-7.035 6.61-4.154-3.987 1.385-1.443Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgCheckCircle)
