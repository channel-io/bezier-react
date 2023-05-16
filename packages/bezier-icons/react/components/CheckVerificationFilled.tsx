import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgCheckVerificationFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M12 2.719 9.053 1 7.359 3.962l-3.412-.015.015 3.412L1 9.053 2.719 12 1 14.947l2.962 1.694-.015 3.412 3.412-.015L9.053 23 12 21.281 14.947 23l1.694-2.962 3.412.015-.015-3.412L23 14.947 21.281 12 23 9.053l-2.962-1.694.015-3.412-3.412.015L14.947 1 12 2.719Zm-5.345 9.697 4.154 3.988 7.035-6.61-1.369-1.457-5.65 5.31-2.785-2.674-1.385 1.443Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgCheckVerificationFilled)
