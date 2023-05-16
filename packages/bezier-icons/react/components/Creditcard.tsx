import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgCreditcard(props: SVGProps<SVGSVGElement>) {
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
        d="M20 17H4v-5h16v5Zm0-8H4V7h16v2ZM3.5 5h17c.827 0 1.5.673 1.5 1.5v11c0 .827-.673 1.5-1.5 1.5h-17c-.827 0-1.5-.673-1.5-1.5v-11C2 5.673 2.673 5 3.5 5ZM10 15H6v-2h4v2Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgCreditcard)
