import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgShopping(props: SVGProps<SVGSVGElement>) {
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
        d="M16 5C16 2.79086 14.2091 1 12 1C9.79086 1 8 2.79086 8 5V7H4.5C3.67157 7 3 7.67157 3 8.5V16.5C3 18.9853 5.01472 21 7.5 21H16.5C18.9853 21 21 18.9853 21 16.5V8.5C21 7.67157 20.3284 7 19.5 7H16V5ZM14 7V5C14 3.94564 13.1841 3.08183 12.1493 3.00549L12 3C10.9456 3 10.0818 3.81588 10.0055 4.85074L10 5V7H14ZM8 9H5V16.5C5 17.8255 6.03154 18.91 7.33562 18.9947L7.5 19H16.5C17.8255 19 18.91 17.9685 18.9947 16.6644L19 16.5V9H16H14H10H8ZM9 12C9.55228 12 10 11.5523 10 11C10 10.4477 9.55228 10 9 10C8.44772 10 8 10.4477 8 11C8 11.5523 8.44772 12 9 12ZM15 12C15.5523 12 16 11.5523 16 11C16 10.4477 15.5523 10 15 10C14.4477 10 14 10.4477 14 11C14 11.5523 14.4477 12 15 12Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgShopping)
