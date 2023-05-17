import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgPageZip(props: SVGProps<SVGSVGElement>) {
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
        d="M7.00024 20.0001H17.0002V10.3701L13.0002 5.70412V10.0001H11.0002V4.00012H7.00024V20.0001ZM12.9112 2.52612L18.6392 9.20912C18.8722 9.48112 19.0002 9.82812 19.0002 10.1851V20.5001C19.0002 21.3271 18.3272 22.0001 17.5002 22.0001H6.50024C5.67324 22.0001 5.00024 21.3271 5.00024 20.5001V3.50012C5.00024 2.67312 5.67324 2.00012 6.50024 2.00012H11.7702C12.2102 2.00012 12.6262 2.19212 12.9112 2.52612ZM11 14H13V12H11V14ZM11 18H13V16H11V18Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgPageZip)
