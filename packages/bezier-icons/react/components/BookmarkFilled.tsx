import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgBookmarkFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M19.0072 3.99286C19.0032 2.89113 18.109 2.00012 17.0073 2.00012H6.9996C5.89503 2.00012 4.9996 2.89555 4.9996 4.00012L4.9996 19.5774C4.9996 20.4257 5.98939 20.8887 6.64054 20.345L12.0356 15.8401L17.4229 20.3384C18.0753 20.8832 19.0669 20.4172 19.0638 19.5672L19.0072 3.99286Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgBookmarkFilled)
