import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgArrowLeftCircleFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M2 12C2 6.478 6.477 2 12 2C17.523 2 22 6.478 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12ZM6.29289 11.2929L11.2929 6.29291L12.7071 7.70712L9.41423 11H18V13H9.4142L12.7071 16.2929L11.2929 17.7071L6.29289 12.7071C5.90237 12.3166 5.90237 11.6834 6.29289 11.2929Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgArrowLeftCircleFilled)
