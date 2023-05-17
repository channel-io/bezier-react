import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgTrash(props: SVGProps<SVGSVGElement>) {
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
        d="M14.0002 4.00009H10.0002V5.00009H14.0002V4.00009ZM16.0002 5.00009H20.0002V7.00009H19V18C19 20.2091 17.2091 22 15 22H9C6.79086 22 5 20.2091 5 18V7.00009H4.00021V5.00009H8.00021V3.50009C8.00021 2.67181 8.67193 2.00009 9.50021 2.00009H14.5002C15.3285 2.00009 16.0002 2.67181 16.0002 3.50009V5.00009ZM7 18V7.00009H17V18C17 19.1046 16.1046 20 15 20H9C7.89543 20 7 19.1046 7 18ZM9.00021 10.0001V17.0001H11.0002V10.0001H9.00021ZM13.0002 17.0001V10.0001H15.0002V17.0001H13.0002Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgTrash)
