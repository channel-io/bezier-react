import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgMetro(props: SVGProps<SVGSVGElement>) {
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
        d="M7.5 13C6.67157 13 6 13.6716 6 14.5C6 15.3284 6.67157 16 7.5 16C8.32843 16 9 15.3284 9 14.5C9 13.6716 8.32843 13 7.5 13Z"
      />
      <path
        fill="currentColor"
        d="M15 14.5C15 13.6716 15.6716 13 16.5 13C17.3284 13 18 13.6716 18 14.5C18 15.3284 17.3284 16 16.5 16C15.6716 16 15 15.3284 15 14.5Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 2C19.2091 2 21 3.79086 21 6V18C21 18.5523 20.5523 19 20 19H17L19.1464 21.1464C19.4614 21.4614 19.2383 22 18.7929 22H16.4142C16.149 22 15.8946 21.8946 15.7071 21.7071L13 19H11L8.29289 21.7071C8.10536 21.8946 7.851 22 7.58579 22H5.20711C4.76165 22 4.53857 21.4614 4.85355 21.1464L7 19H4C3.44772 19 3 18.5523 3 18V6C3 3.79086 4.79086 2 7 2H17ZM19 6V10H13V4H17L17.1493 4.00549C18.1841 4.08183 19 4.94564 19 6ZM11 4H7C5.94564 4 5.08183 4.81588 5.00549 5.85074L5 6V10H11V4ZM5 17H19V12H5V17Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgMetro)
