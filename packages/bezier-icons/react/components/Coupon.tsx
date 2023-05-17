import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgCoupon(props: SVGProps<SVGSVGElement>) {
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
        d="M20.5 5C21.3284 5 22 5.67157 22 6.5V10.5C22 10.7761 21.7761 11 21.5 11H21C20.4477 11 20 11.4477 20 12C20 12.5128 20.386 12.9355 20.8834 12.9933L21 13H21.5C21.7761 13 22 13.2239 22 13.5V17.5C22 18.3284 21.3284 19 20.5 19H3.5C2.67157 19 2 18.3284 2 17.5V13.5C2 13.2239 2.22386 13 2.5 13H3C3.55228 13 4 12.5523 4 12C4 11.4872 3.61396 11.0645 3.11662 11.0067L3 11H2.5C2.22386 11 2 10.7761 2 10.5V6.5C2 5.67157 2.67157 5 3.5 5H20.5ZM8 7H4V9.172L4.03977 9.1853C5.1368 9.59017 5.92224 10.6134 5.99455 11.818L6 12C6 13.2367 5.25166 14.2987 4.1831 14.7577L4 14.829V17H8V15H10V17H20V14.827L19.9602 14.8147C18.8632 14.4098 18.0778 13.3866 18.0054 12.182L18 12C18 10.7633 18.7483 9.70134 19.8169 9.2423L20 9.17V7H10V9H8V7ZM10 11H8V13H10V11Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgCoupon)
