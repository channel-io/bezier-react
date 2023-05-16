import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgPersonBlocked(props: SVGProps<SVGSVGElement>) {
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
        d="M9.484 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM11 17c0-1.672.69-3.186 1.796-4.274A7.937 7.937 0 0 0 9.484 12a8 8 0 0 0-7.983 7.476.503.503 0 0 0 .506.524h9.805A5.958 5.958 0 0 1 11 17Zm4.715 2.7c.391.186.823.3 1.285.3 1.654 0 3-1.346 3-3 0-.462-.114-.894-.3-1.285L15.714 19.7Zm2.57-5.399a2.954 2.954 0 0 0-1.285-.3c-1.654 0-3 1.345-3 3 0 .461.113.893.301 1.284l3.984-3.984ZM12 17.001a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgPersonBlocked)
