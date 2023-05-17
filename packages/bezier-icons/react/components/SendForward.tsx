import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgSendForward(props: SVGProps<SVGSVGElement>) {
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
        d="M9.62113 11.4434L5.34888 7.0001H17.2826L9.62113 11.4434ZM20.9876 5.0001H3.0001C2.11863 5.0001 1.66831 6.05778 2.27926 6.69319L8.54955 13.2145L11.0026 21.9203C11.2425 22.7719 12.3888 22.9153 12.8311 22.1491L21.8608 6.5094C21.8668 6.49923 21.8726 6.48896 21.8782 6.4786C22.2357 5.82482 21.7747 5.02259 21.0315 5.00056C21.0169 5.00008 21.0022 4.99993 20.9876 5.0001ZM18.2607 8.7448L10.6171 13.1778L12.2846 19.0957L18.2607 8.7448Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgSendForward)
