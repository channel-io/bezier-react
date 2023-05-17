import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgImage(props: SVGProps<SVGSVGElement>) {
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
        d="M5 19H19V5H5V19ZM19.5 3H4.5C3.673 3 3 3.673 3 4.5V19.5C3 20.327 3.673 21 4.5 21H19.5C20.327 21 21 20.327 21 19.5V4.5C21 3.673 20.327 3 19.5 3ZM18.0002 18.0001V12.0001L14.0052 10.0001L6.0002 14.0001V18.0001H18.0002ZM10.0002 8.00012C10.0002 9.10412 9.1042 10.0001 8.0002 10.0001C6.8962 10.0001 6.0002 9.10412 6.0002 8.00012C6.0002 6.89612 6.8962 6.00012 8.0002 6.00012C9.1042 6.00012 10.0002 6.89612 10.0002 8.00012Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgImage)
