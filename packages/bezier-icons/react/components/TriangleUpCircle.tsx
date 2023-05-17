import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgTriangleUpCircle(props: SVGProps<SVGSVGElement>) {
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
        d="M4.0002 12.0001C4.0002 16.4111 7.5892 20.0001 12.0002 20.0001C16.4112 20.0001 20.0002 16.4111 20.0002 12.0001C20.0002 7.58912 16.4112 4.00012 12.0002 4.00012C7.5892 4.00012 4.0002 7.58912 4.0002 12.0001ZM2.0002 12.0001C2.0002 6.47712 6.4772 2.00012 12.0002 2.00012C17.5232 2.00012 22.0002 6.47712 22.0002 12.0001C22.0002 17.5231 17.5232 22.0001 12.0002 22.0001C6.4772 22.0001 2.0002 17.5231 2.0002 12.0001ZM11.7213 8.27652C11.8413 8.13252 12.0623 8.13252 12.1823 8.27652L16.5413 13.5075C16.7043 13.7035 16.5653 14.0005 16.3113 14.0005H7.5923C7.3373 14.0005 7.1993 13.7035 7.3613 13.5075L11.7213 8.27652Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgTriangleUpCircle)
