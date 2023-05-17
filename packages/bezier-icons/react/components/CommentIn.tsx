import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgCommentIn(props: SVGProps<SVGSVGElement>) {
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
        d="M7 3C4.79086 3 3 4.79086 3 7V20.9597C3 22.2174 4.4549 22.9167 5.43704 22.131L8.80295 19.4383C9.15758 19.1546 9.5982 19 10.0523 19H17C19.2091 19 21 17.2091 21 15V7C21 4.79086 19.2091 3 17 3H7ZM5 7C5 5.89543 5.89543 5 7 5H17C18.1046 5 19 5.89543 19 7V15C19 16.1046 18.1046 17 17 17H10.0523C9.14406 17 8.26282 17.3091 7.55356 17.8765L5 19.9194V7ZM16 9.41421C16.3905 9.02369 16.3905 8.39052 16 8C15.6095 7.60948 14.9763 7.60948 14.5858 8L11 11.5858L9.41421 10C9.02369 9.60948 8.39052 9.60948 8 10C7.60948 10.3905 7.60948 11.0237 8 11.4142L10.2929 13.7071C10.6834 14.0976 11.3166 14.0976 11.7071 13.7071L16 9.41421Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgCommentIn)
