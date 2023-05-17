import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgSendForwardFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M20.9186 5.01067L2.91895 5.01044C2.51794 5.00987 2.15508 5.24939 1.99895 5.61896C1.84146 5.98818 1.92039 6.41488 2.19802 6.70376L7.74779 12.4762L17.7176 7.45454L18.0686 8.06249L8.74519 14.2098L10.9214 21.9311C11.0307 22.3184 11.3609 22.6023 11.7599 22.6514C11.9807 22.6798 12.1991 22.6322 12.3836 22.5257C12.5326 22.4397 12.6604 22.3151 12.7501 22.1605L21.7846 6.51062C21.964 6.20147 21.9636 5.82068 21.7846 5.51065C21.6061 5.20148 21.2765 5.01069 20.9186 5.01067Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgSendForwardFilled)
