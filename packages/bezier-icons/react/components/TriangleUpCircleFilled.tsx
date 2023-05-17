import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgTriangleUpCircleFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M11.9518 8.16849C12.0368 8.16849 12.1218 8.20449 12.1818 8.27649L16.5418 13.5075C16.7038 13.7035 16.5658 14.0005 16.3108 14.0005H7.59181C7.33781 14.0005 7.19881 13.7035 7.36181 13.5075L11.7218 8.27649C11.7808 8.20449 11.8668 8.16849 11.9518 8.16849ZM11.9998 2.00049C6.47682 2.00049 1.99982 6.47749 1.99982 12.0005C1.99982 17.5225 6.47682 22.0005 11.9998 22.0005C17.5228 22.0005 21.9998 17.5225 21.9998 12.0005C21.9998 6.47749 17.5228 2.00049 11.9998 2.00049Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgTriangleUpCircleFilled)
