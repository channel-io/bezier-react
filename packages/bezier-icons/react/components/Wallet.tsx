import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgWallet(props: SVGProps<SVGSVGElement>) {
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
        d="M20 3.00021C20 2.92725 19.992 2.85451 19.9762 2.78328C19.8564 2.24415 19.3222 1.90422 18.7831 2.02403L3.56614 5.40557C2.65106 5.60892 2 6.42054 2 7.35794V18.5C2 19.3284 2.67157 20 3.5 20H20.5C21.3284 20 22 19.3284 22 18.5V7.5C22 6.67157 21.3284 6 20.5 6H20V3.00021ZM11.217 5.7536L18 4.2456V5.7536H11.217ZM4 8H20V10H17C16.4477 10 16 10.4477 16 11V15C16 15.5523 16.4477 16 17 16H20V18H4V8ZM20 13C20 12.4477 19.5523 12 19 12C18.4477 12 18 12.4477 18 13C18 13.5523 18.4477 14 19 14C19.5523 14 20 13.5523 20 13Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgWallet)
