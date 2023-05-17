import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgProfile(props: SVGProps<SVGSVGElement>) {
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
        d="M4 17V7H20V17H4ZM3.5 5H20.5C21.327 5 22 5.673 22 6.5V17.5C22 18.327 21.327 19 20.5 19H3.5C2.673 19 2 18.327 2 17.5V6.5C2 5.673 2.673 5 3.5 5ZM10.0002 11.0001C10.0002 12.1041 9.1042 13.0001 8.0002 13.0001C6.8962 13.0001 6.0002 12.1041 6.0002 11.0001C6.0002 9.89609 6.8962 9.00009 8.0002 9.00009C9.1042 9.00009 10.0002 9.89609 10.0002 11.0001ZM12 11H18V9H12V11ZM18 15H12V13H18V15Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgProfile)
