import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgVideocamOffFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M15.9982 8.00007V13.8771L22.2532 20.1321L20.8392 21.5461L2.45421 3.16107L3.86821 1.74707L8.12121 6.00007H13.9982C15.1022 6.00007 15.9982 6.89607 15.9982 8.00007ZM2.00211 8.00017V16.0002C2.00211 17.1042 2.89811 18.0002 4.00211 18.0002H13.9981C14.5201 18.0002 14.9911 17.7952 15.3471 17.4682L3.89011 6.01117C2.83811 6.07017 2.00211 6.93417 2.00211 8.00017ZM21.1877 17.3498C21.5147 17.6128 21.9997 17.3788 21.9997 16.9598V7.03977C21.9997 6.62077 21.5147 6.38777 21.1877 6.64977L17.1877 9.84977C17.0687 9.94477 17.0007 10.0878 17.0007 10.2408V13.7598C17.0007 13.9118 17.0687 14.0548 17.1877 14.1508L21.1877 17.3498Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgVideocamOffFilled)
