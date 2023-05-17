import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgHeadset(props: SVGProps<SVGSVGElement>) {
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
        d="M12 2C16.411 2 20 5.589 20 10V17C20 17.552 19.552 18 19 18H16.5C15.673 18 15 17.327 15 16.5V11.5C15 10.673 15.673 10 16.5 10H18C18 6.691 15.309 4 12 4C8.691 4 6 6.691 6 10H7.5C8.327 10 9 10.673 9 11.5V16.5C9 17.327 8.327 18 7.5 18H6V19C6 19.551 6.449 20 7 20H11C11.5523 20 12 20.4477 12 21C12 21.5523 11.5523 22 11 22H7C5.346 22 4 20.654 4 19V10C4 5.589 7.589 2 12 2Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgHeadset)
