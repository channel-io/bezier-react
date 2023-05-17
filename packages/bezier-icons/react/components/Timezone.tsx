import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgTimezone(props: SVGProps<SVGSVGElement>) {
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
        d="M18.7562 5.33201C15.7162 0.889006 9.2842 0.889006 6.2432 5.33201C4.4822 7.90501 4.6462 11.345 6.3892 13.931L12.0562 22.339C12.2682 22.655 12.7322 22.655 12.9442 22.339L18.6102 13.931C20.3532 11.345 20.5182 7.90501 18.7562 5.33201ZM18 9.5C18 12.5376 15.5376 15 12.5 15C9.46243 15 7 12.5376 7 9.5C7 6.46243 9.46243 4 12.5 4C15.5376 4 18 6.46243 18 9.5ZM13.5 6C13.5 5.44772 13.0523 5 12.5 5C11.9477 5 11.5 5.44772 11.5 6V9.5C11.5 9.85126 11.6843 10.1768 11.9855 10.3575L14.4855 11.8575C14.9591 12.1416 15.5733 11.9881 15.8575 11.5145C16.1416 11.0409 15.9881 10.4267 15.5145 10.1425L13.5 8.93381V6Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgTimezone)
