import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgPersonFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M16.4874 6.50012C16.4874 8.98512 14.4724 11.0001 11.9874 11.0001C9.50242 11.0001 7.48742 8.98512 7.48742 6.50012C7.48742 4.01512 9.50242 2.00012 11.9874 2.00012C14.4724 2.00012 16.4874 4.01512 16.4874 6.50012ZM2.00092 21.4781C1.98592 21.7611 2.22392 22.0001 2.50792 22.0001H21.4669C21.7509 22.0001 21.9879 21.7611 21.9739 21.4781C21.7019 16.1981 17.3349 12.0001 11.9869 12.0001C6.63992 12.0001 2.27192 16.1981 2.00092 21.4781Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgPersonFilled)
