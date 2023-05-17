import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgChevronLeftDouble(props: SVGProps<SVGSVGElement>) {
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
        d="M17.2407 19.6508C17.6001 20.0702 18.2314 20.1187 18.6508 19.7593C19.0701 19.3999 19.1187 18.7686 18.7592 18.3493L13.3171 12L18.7592 5.65083C19.1187 5.23151 19.0701 4.60021 18.6508 4.24079C18.2314 3.88136 17.6001 3.92993 17.2407 4.34925L11.2407 11.3493C10.9197 11.7237 10.9197 12.2763 11.2407 12.6508L17.2407 19.6508Z"
      />
      <path
        fill="currentColor"
        d="M9.24073 19.6508C9.60015 20.0702 10.2314 20.1187 10.6508 19.7593C11.0701 19.3999 11.1187 18.7686 10.7592 18.3493L5.31706 12L10.7592 5.65083C11.1187 5.23151 11.0701 4.60021 10.6508 4.24079C10.2314 3.88136 9.60015 3.92993 9.24073 4.34925L3.24072 11.3493C2.91973 11.7237 2.91973 12.2763 3.24072 12.6508L9.24073 19.6508Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgChevronLeftDouble)
