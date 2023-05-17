import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgInfoFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M11.9997 9.00011C11.1717 9.00011 10.4997 8.32811 10.4997 7.50011C10.4997 6.67111 11.1717 6.00011 11.9997 6.00011C12.8287 6.00011 13.4997 6.67111 13.4997 7.50011C13.4997 8.32811 12.8287 9.00011 11.9997 9.00011ZM10.9997 18.0001H12.9997V10.0001H10.9997V18.0001ZM11.9997 2.00011C6.48569 2.00011 1.99969 6.48611 1.99969 12.0001C1.99969 17.5141 6.48569 22.0001 11.9997 22.0001C17.5147 22.0001 21.9997 17.5141 21.9997 12.0001C21.9997 6.48611 17.5147 2.00011 11.9997 2.00011Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgInfoFilled)
