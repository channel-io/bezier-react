import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgCheckbox(props: SVGProps<SVGSVGElement>) {
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
        d="M7.00018 3.00009H17.0002C19.2092 3.00009 21.0002 4.79109 21.0002 7.00009V17.0001C21.0002 19.2091 19.2092 21.0001 17.0002 21.0001H7.00018C4.79118 21.0001 3.00018 19.2091 3.00018 17.0001V7.00009C3.00018 4.79109 4.79118 3.00009 7.00018 3.00009ZM19.0002 7.00009C19.0002 5.89709 18.1032 5.00009 17.0002 5.00009H7.00018C5.89718 5.00009 5.00018 5.89709 5.00018 7.00009V17.0001C5.00018 18.1031 5.89718 19.0001 7.00018 19.0001H17.0002C18.1032 19.0001 19.0002 18.1031 19.0002 17.0001V7.00009ZM6.58597 12.1391L8.00043 10.7252L10.8603 13.5861L17.0002 7.44617L18.4144 8.86039L10.8601 16.4147L6.58597 12.1391Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgCheckbox)
