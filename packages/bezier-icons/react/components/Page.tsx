import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgPage(props: SVGProps<SVGSVGElement>) {
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
        d="M5.00018 20.5001V3.50012C5.00018 2.67184 5.6719 2.00012 6.50018 2.00012H11.7702C12.2107 2.00012 12.6304 2.19298 12.9084 2.52427L18.6384 9.20833C18.8716 9.48035 19.0002 9.82611 19.0002 10.1851V20.5001C19.0002 21.3284 18.3285 22.0001 17.5002 22.0001H6.50018C5.6719 22.0001 5.00018 21.3284 5.00018 20.5001ZM7.00018 20.0001H17.0002V10.9999H12.3852C11.6198 10.9999 11.0002 10.3791 11.0002 9.6149V4.00012H7.00018V20.0001ZM15.8255 8.9999L13.0002 5.7042V8.9999H15.8255Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgPage)
