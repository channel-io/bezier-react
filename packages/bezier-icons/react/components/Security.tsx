import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgSecurity(props: SVGProps<SVGSVGElement>) {
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
        d="M7.08554 11.6387L8.5 10.2247L10.8603 12.5861L15.5858 7.86057L17 9.27479L10.8601 15.4147L7.08554 11.6387Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 5.30701L12 1.93201L3 5.30701V10C3 14.6688 5.63784 18.937 9.81378 21.0249L12 22.118L14.1862 21.0249C18.3622 18.937 21 14.6688 21 10V5.30701ZM5 10V6.69301L12 4.06801L19 6.69301V10C19 13.9113 16.7902 17.4869 13.2918 19.2361L12 19.882L10.7082 19.2361C7.20984 17.4869 5 13.9113 5 10Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgSecurity)
