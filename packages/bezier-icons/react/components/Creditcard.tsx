import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgCreditcard(props: SVGProps<SVGSVGElement>) {
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
        d="M20 17H4V12H20V17ZM20 9H4V7H20V9ZM3.5 5H20.5C21.327 5 22 5.673 22 6.5V17.5C22 18.327 21.327 19 20.5 19H3.5C2.673 19 2 18.327 2 17.5V6.5C2 5.673 2.673 5 3.5 5ZM10 15H6V13H10V15Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgCreditcard)
