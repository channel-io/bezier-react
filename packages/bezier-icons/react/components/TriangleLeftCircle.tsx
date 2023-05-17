import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgTriangleLeftCircle(props: SVGProps<SVGSVGElement>) {
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
        d="M4.00018 12.0001C4.00018 16.4111 7.58918 20.0001 12.0002 20.0001C16.4112 20.0001 20.0002 16.4111 20.0002 12.0001C20.0002 7.58912 16.4112 4.00012 12.0002 4.00012C7.58918 4.00012 4.00018 7.58912 4.00018 12.0001ZM12.0002 22.0001C6.47718 22.0001 2.00018 17.5231 2.00018 12.0001C2.00018 6.47712 6.47718 2.00012 12.0002 2.00012C17.5232 2.00012 22.0002 6.47712 22.0002 12.0001C22.0002 17.5231 17.5232 22.0001 12.0002 22.0001ZM8.3995 11.78L13.6305 7.42104C13.8255 7.25804 14.1225 7.39704 14.1225 7.65104V16.371C14.1225 16.625 13.8255 16.764 13.6305 16.601L8.3995 12.241C8.2555 12.122 8.2555 11.9 8.3995 11.78Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgTriangleLeftCircle)
