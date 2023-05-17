import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgErrorFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M11.9997 2.00011C6.48569 2.00011 1.99969 6.48611 1.99969 12.0001C1.99969 17.5141 6.48569 22.0001 11.9997 22.0001C17.5147 22.0001 21.9997 17.5141 21.9997 12.0001C21.9997 6.48611 17.5147 2.00011 11.9997 2.00011ZM11.9333 15.5953C11.2033 15.5953 10.6113 16.1873 10.6113 16.9183C10.6113 17.6483 11.2033 18.2403 11.9333 18.2403C12.6633 18.2403 13.2563 17.6483 13.2563 16.9183C13.2563 16.1873 12.6633 15.5953 11.9333 15.5953ZM13.1473 5.9799L13.0143 13.9869H10.8523L10.7203 5.9799H13.1473Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgErrorFilled)
