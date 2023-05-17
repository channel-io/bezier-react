import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgCloudDownload(props: SVGProps<SVGSVGElement>) {
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
        d="M11.9999 6C9.92634 6 8.22026 7.57854 8.01967 9.5988L7.9302 10.5H6.24988C4.45495 10.5 2.99988 11.9551 2.99988 13.75C2.99988 15.5449 4.45495 17 6.24988 17H6.99988C7.55216 17 7.99988 17.4477 7.99988 18C7.99988 18.5523 7.55216 19 6.99988 19H6.24988C3.35038 19 0.999878 16.6495 0.999878 13.75C0.999878 10.8708 3.31756 8.53296 6.18901 8.50035C6.85524 5.91199 9.20378 4 11.9999 4C14.2234 4 16.1627 5.20939 17.1988 7.00324C20.4204 7.10818 22.9999 9.75286 22.9999 13C22.9999 16.3137 20.3136 19 16.9999 19C16.4476 19 15.9999 18.5523 15.9999 18C15.9999 17.4477 16.4476 17 16.9999 17C19.209 17 20.9999 15.2091 20.9999 13C20.9999 10.7909 19.209 9 16.9999 9H15.9295L15.6675 8.40037C15.0493 6.98556 13.6386 6 11.9999 6ZM12.707 18.7071C12.3165 19.0976 11.6833 19.0976 11.2928 18.7071L8.36555 15.7799C7.86158 15.2759 8.21852 14.4142 8.93124 14.4142L10.9999 14.4142L10.9999 11C10.9999 10.4477 11.4476 10 11.9999 10C12.5521 10 12.9999 10.4477 12.9999 11L12.9999 14.4142H15.0685C15.7812 14.4142 16.1382 15.2759 15.6342 15.7799L12.707 18.7071Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgCloudDownload)
