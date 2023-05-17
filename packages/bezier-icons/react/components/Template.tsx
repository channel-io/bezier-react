import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgTemplate(props: SVGProps<SVGSVGElement>) {
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
        d="M17 8.001H6.99998V7.0001H4.00018V17.0001H8.00018V19.0001H3.50018C2.6719 19.0001 2.00018 18.3284 2.00018 17.5001V6.5001C2.00018 5.67181 2.6719 5.0001 3.50018 5.0001H6.99998V4H17V5.0001H20.5002C21.3285 5.0001 22.0002 5.67181 22.0002 6.5001V8.0001H20.0002V7.0001H17V8.001ZM11.4142 22.0001H10.0002V20.5861L18.4852 12.1011L19.8992 13.5151L11.4142 22.0001ZM19.1916 11.3937L20.6066 12.8077L22.0206 11.3937C22.4116 11.0027 22.4116 10.3697 22.0206 9.9787C21.6296 9.5887 20.9976 9.5887 20.6066 9.9787L19.1916 11.3937Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgTemplate)
