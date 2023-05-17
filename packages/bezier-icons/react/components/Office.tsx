import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgOffice(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="currentColor" d="M7 6H9V8H7V6Z" />
      <path fill="currentColor" d="M13 6H11V8H13V6Z" />
      <path fill="currentColor" d="M7 10H9V12H7V10Z" />
      <path fill="currentColor" d="M13 10H11V12H13V10Z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.2222 2C16.6518 2 17 2.44772 17 3V10H20C20.5523 10 21 10.4477 21 11V20C21 20.5523 20.5523 21 20 21H3.77778C3.34822 21 3 20.5523 3 20V3C3 2.44772 3.34822 2 3.77778 2H16.2222ZM15 19V4H5V19H8V14H12V19H15ZM17 19H19V12H17V19Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgOffice)
