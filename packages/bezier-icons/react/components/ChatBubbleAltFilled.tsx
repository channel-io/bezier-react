import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgChatBubbleAltFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M12 20C17.2467 20 21.5 16.4183 21.5 12C21.5 7.58172 17.2467 4 12 4C6.75329 4 2.5 7.58172 2.5 12C2.5 14.7013 4.08986 17.0899 6.52458 18.5384C6.24675 19.5469 5.76983 20.4835 5.38209 21.1421C5.16123 21.5173 5.45705 21.9869 5.8791 21.8801C6.93904 21.612 8.57586 21.032 9.99208 19.821C10.6393 19.9383 11.3111 20 12 20Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgChatBubbleAltFilled)
