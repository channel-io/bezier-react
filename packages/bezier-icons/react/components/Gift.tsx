import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgGift(props: SVGProps<SVGSVGElement>) {
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
        d="M15.5 2C13.567 2 12 3.567 12 5.5C12 3.567 10.433 2 8.5 2C6.567 2 5 3.567 5 5.5C5 6.0368 5.12085 6.54537 5.33682 7H5C3.89543 7 3 7.89543 3 9V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V9C21 7.89543 20.1046 7 19 7H18.6632C18.8792 6.54537 19 6.0368 19 5.5C19 3.567 17.433 2 15.5 2ZM15.5 7C16.3284 7 17 6.32843 17 5.5C17 4.67157 16.3284 4 15.5 4C14.6716 4 14 4.67157 14 5.5V7H15.5ZM8.5 7H10V5.5C10 4.67157 9.32843 4 8.5 4C7.67157 4 7 4.67157 7 5.5C7 6.32843 7.67157 7 8.5 7ZM5 9L5 19H10V9H5ZM14 9H19V19H14V9Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgGift)
