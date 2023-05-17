import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgInfo(props: SVGProps<SVGSVGElement>) {
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
        d="M12.0002 2.00011C17.5228 2.00011 22.0002 6.47715 22.0002 12.0001C22.0002 17.5231 17.5228 22.0001 12.0002 22.0001C6.47693 22.0001 2.00021 17.5234 2.00021 12.0001C2.00021 6.47682 6.47693 2.00011 12.0002 2.00011ZM12.0002 20.0001C16.4183 20.0001 20.0002 16.4185 20.0002 12.0001C20.0002 7.58175 16.4183 4.00011 12.0002 4.00011C7.5815 4.00011 4.00021 7.58139 4.00021 12.0001C4.00021 16.4188 7.5815 20.0001 12.0002 20.0001ZM12.0002 6.00011C12.8292 6.00011 13.5002 6.67111 13.5002 7.50011C13.5002 8.32811 12.8292 9.00011 12.0002 9.00011C11.1712 9.00011 10.5002 8.32811 10.5002 7.50011C10.5002 6.67111 11.1712 6.00011 12.0002 6.00011ZM13 18H11V10H13V18Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgInfo)
