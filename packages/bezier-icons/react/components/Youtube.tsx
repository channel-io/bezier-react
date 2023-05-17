import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgYoutube(props: SVGProps<SVGSVGElement>) {
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
        d="M10.1459 14.947V8.95703L15.055 11.952L10.1459 14.947ZM21.9069 9.02703C21.7819 7.08604 20.278 5.51801 18.3449 5.31201C16.34 5.10904 14.209 5 12 5C9.79094 5 7.65999 5.10904 5.65494 5.31106C3.72197 5.51801 2.218 7.08604 2.09299 9.02703C2.03203 9.98303 2 10.96 2 11.952C2 12.944 2.03203 13.921 2.09299 14.877C2.218 16.818 3.72197 18.386 5.65494 18.592C7.65999 18.795 9.79094 18.904 12 18.904C14.209 18.904 16.34 18.795 18.3449 18.593C20.278 18.386 21.7819 16.818 21.9069 14.877C21.968 13.921 22 12.944 22 11.952C22 10.96 21.968 9.98303 21.9069 9.02703Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgYoutube)
