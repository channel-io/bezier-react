import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgNaver(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 2c5.522 0 10 4.478 10 10s-4.478 10-10 10C6.477 22 2 17.522 2 12S6.477 2 12 2ZM7 7.508v9.015h3.374l.02-4.474 3.03 4.474h3.396V7.508L13.47 7.5l-.01 4.49-3.087-4.482H7Zm-4.068 4.506.001-.134v.268l-.001-.134Zm9.292-8.995h-.583a9.16 9.16 0 0 1 .583 0Zm8.704 9.274v-.56a9.096 9.096 0 0 1 0 .56ZM11.65 21.01h.563a9.46 9.46 0 0 1-.563 0Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgNaver)
