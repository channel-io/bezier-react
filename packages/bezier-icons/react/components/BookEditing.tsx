import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgBookEditing(props: SVGProps<SVGSVGElement>) {
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
        d="M7 2C4.79086 2 3 3.79086 3 6V18C3 20.2091 4.79086 22 7 22H9V21V20V4H17C18.1046 4 19 4.89543 19 6V9H21V6C21 3.79086 19.2091 2 17 2H7ZM7 4C5.89543 4 5 4.89543 5 6V18C5 19.1046 5.89543 20 7 20L7 4ZM11 8C11 7.44772 11.4477 7 12 7H16C16.5523 7 17 7.44772 17 8C17 8.55228 16.5523 9 16 9H12C11.4477 9 11 8.55228 11 8ZM21.1975 13.2955L19.7037 11.8027L21.1975 10.3088C21.6103 9.89707 22.2775 9.89707 22.6903 10.3088C23.1031 10.7216 23.1031 11.3899 22.6903 11.8027L21.1975 13.2955ZM12.4928 22.0001H11V20.5073L18.9579 12.5494L20.4507 14.0422L12.4928 22.0001Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgBookEditing)
