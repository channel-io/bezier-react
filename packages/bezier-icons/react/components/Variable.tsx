import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgVariable(props: SVGProps<SVGSVGElement>) {
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
        d="M6 7V5H5L4.82373 5.00509C3.24892 5.09634 2 6.40232 2 8V10L1.99327 10.1166C1.93551 10.614 1.51284 11 1 11V13L1.11662 13.0067C1.61396 13.0645 2 13.4872 2 14V16L2.00509 16.1763C2.09634 17.7511 3.40232 19 5 19H6V17H5L4.88338 16.9933C4.38604 16.9355 4 16.5128 4 16V14L3.99491 13.8237C3.9544 13.1247 3.67456 12.4899 3.2361 12C3.71115 11.4692 4 10.7684 4 10V8L4.00673 7.88338C4.06449 7.38604 4.48716 7 5 7H6ZM6.2063 11.9928C6.2063 12.7374 6.81477 13.3459 7.55935 13.3459C8.30393 13.3459 8.91241 12.7374 8.91241 11.9928C8.91241 11.2492 8.30393 10.6407 7.55935 10.6407C6.81477 10.6407 6.2063 11.2492 6.2063 11.9928ZM10.6869 11.9928C10.6869 12.7374 11.2964 13.3459 12.0399 13.3459C12.7845 13.3459 13.393 12.7374 13.393 11.9928C13.393 11.2492 12.7845 10.6407 12.0399 10.6407C11.2964 10.6407 10.6869 11.2492 10.6869 11.9928ZM16.5209 13.3459C15.7763 13.3459 15.1679 12.7374 15.1679 11.9928C15.1679 11.2492 15.7763 10.6407 16.5209 10.6407C17.2645 10.6407 17.874 11.2492 17.874 11.9928C17.874 12.7374 17.2645 13.3459 16.5209 13.3459ZM23 11C22.4872 11 22.0645 10.614 22.0067 10.1166L22 10V8C22 6.40232 20.7511 5.09634 19.1763 5.00509L19 5H18V7H19C19.5128 7 19.9355 7.38604 19.9933 7.88338L20 8V10C20 10.7684 20.2889 11.4692 20.7639 12C20.3254 12.4899 20.0456 13.1247 20.0051 13.8237L20 14V16C20 16.5128 19.614 16.9355 19.1166 16.9933L19 17H18V19H19C20.5977 19 21.9037 17.7511 21.9949 16.1763L22 16V14C22 13.4872 22.386 13.0645 22.8834 13.0067L23 13V11Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgVariable)
