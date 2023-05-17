import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgArchive(props: SVGProps<SVGSVGElement>) {
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
        d="M18.994 19H4.99399V9H18.994V19ZM20 5H4V7H4.494H19.494H20V5ZM20.5 3C21.327 3 22 3.673 22 4.5V9H20.994V19.5C20.994 20.327 20.321 21 19.494 21H4.494C3.667 21 2.994 20.327 2.994 19.5V9H2V4.5C2 3.673 2.673 3 3.5 3H20.5ZM14.494 13H9.49399V11H14.494V13Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgArchive)
