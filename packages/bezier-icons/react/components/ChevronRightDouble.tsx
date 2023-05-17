import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgChevronRightDouble(props: SVGProps<SVGSVGElement>) {
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
        d="M6.75926 4.34923C6.39983 3.9299 5.76853 3.88134 5.34921 4.24076C4.92988 4.60018 4.88132 5.23148 5.24074 5.65081L10.6829 12L5.24074 18.3492C4.88132 18.7686 4.92988 19.3999 5.34921 19.7593C5.76853 20.1187 6.39983 20.0701 6.75926 19.6508L12.7593 12.6508C13.0802 12.2763 13.0802 11.7237 12.7593 11.3492L6.75926 4.34923Z"
      />
      <path
        fill="currentColor"
        d="M14.7593 4.34923C14.3998 3.9299 13.7685 3.88134 13.3492 4.24076C12.9299 4.60018 12.8813 5.23148 13.2407 5.65081L18.6829 12L13.2407 18.3492C12.8813 18.7686 12.9299 19.3999 13.3492 19.7593C13.7685 20.1187 14.3998 20.0701 14.7593 19.6508L20.7593 12.6508C21.0802 12.2763 21.0802 11.7237 20.7593 11.3492L14.7593 4.34923Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgChevronRightDouble)
