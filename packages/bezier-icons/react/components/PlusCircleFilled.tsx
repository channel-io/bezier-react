import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgPlusCircleFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M17.86 13.0001H13V17.8591H11V13.0001H6.14V11.0001H11V6.14012H13V11.0001H17.86V13.0001ZM12 2.00012C6.5 2.00012 2 6.50012 2 12.0001C2 17.5001 6.5 22.0001 12 22.0001C17.5 22.0001 22 17.5001 22 12.0001C22 6.50012 17.5 2.00012 12 2.00012Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgPlusCircleFilled)
