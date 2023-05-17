import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgKeyboardHide(props: SVGProps<SVGSVGElement>) {
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
        d="M4 15H20V5H4V15ZM20.5 3H3.5C2.673 3 2 3.673 2 4.5V15.5C2 16.327 2.673 17 3.5 17H20.5C21.327 17 22 16.327 22 15.5V4.5C22 3.673 21.327 3 20.5 3ZM6 8H8V6H6V8ZM18 8H16V6H18V8ZM9.33301 8H11.333V6H9.33301V8ZM14.666 8H12.666V6H14.666V8ZM6 11H8V9H6V11ZM18 11H16V9H18V11ZM9.33301 11H11.333V9H9.33301V11ZM14.666 11H12.666V9H14.666V11ZM8 14H16V12.02H8V14ZM9.39393 17.8309C8.8863 17.6133 8.29842 17.8485 8.08087 18.3561C7.86331 18.8637 8.09846 19.4516 8.60609 19.6692L12.1061 21.1692C12.3576 21.277 12.6424 21.277 12.8939 21.1692L16.3939 19.6692C16.9016 19.4516 17.1367 18.8637 16.9192 18.3561C16.7016 17.8485 16.1137 17.6133 15.6061 17.8309L12.5 19.162L9.39393 17.8309Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgKeyboardHide)
