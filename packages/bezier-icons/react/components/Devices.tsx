import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgDevices(props: SVGProps<SVGSVGElement>) {
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
        d="M3.50008 5.0001H20.5C21.327 5.0001 22 5.6731 22 6.5001V9.00009H20V7.0001H4.00008V16.9999H14L13.9999 18.9999L1 19C0.447683 19 -5.05581e-05 18.5522 4.28207e-09 17.9999C5.0566e-05 17.4477 0.447712 17 0.999935 17L2.00008 16.9999V6.5001C2.00008 5.6731 2.67308 5.0001 3.50008 5.0001ZM20.006 19.9999H17.006V12H20.006V19.9999ZM15.506 9.99996H21.506C21.782 9.99996 22.006 10.224 22.006 10.5V21.4999C22.006 21.7759 21.782 21.9999 21.506 21.9999H15.506C15.229 21.9999 15.006 21.7759 15.006 21.4999V10.5C15.006 10.224 15.229 9.99996 15.506 9.99996Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgDevices)
