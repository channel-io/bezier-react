import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgInboxAll(props: SVGProps<SVGSVGElement>) {
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
        d="M19.0002 7.5001H14.5002C14.5002 8.8801 13.3812 10.0001 12.0002 10.0001C10.6192 10.0001 9.50021 8.8801 9.50021 7.5001H5.00021V5.0001H19.0002V7.5001ZM19.0002 14.5001H14.5002C14.5002 15.8801 13.3812 17.0001 12.0002 17.0001C10.6192 17.0001 9.50021 15.8801 9.50021 14.5001H5.00021V12.0001H19.0002V14.5001ZM19.5002 3.0001H4.50021C3.67321 3.0001 3.00021 3.6731 3.00021 4.5001V19.5001C3.00021 20.3271 3.67321 21.0001 4.50021 21.0001H19.5002C20.3272 21.0001 21.0002 20.3271 21.0002 19.5001V4.5001C21.0002 3.6731 20.3272 3.0001 19.5002 3.0001Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgInboxAll)
