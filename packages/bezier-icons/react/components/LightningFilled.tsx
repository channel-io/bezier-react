import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgLightningFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M18.5402 10.2255L14.2212 9.2255L16.3032 2.1435C16.4492 1.6465 15.8352 1.2825 15.4702 1.6495L5.14621 12.0025C4.86921 12.2805 5.00521 12.7545 5.38821 12.8425L9.70721 13.8425L7.62421 20.9245C7.47821 21.4215 8.09221 21.7855 8.45821 21.4175L18.7812 11.0655C19.0582 10.7875 18.9222 10.3135 18.5402 10.2255Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgLightningFilled)
