import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgCheckBold(props: SVGProps<SVGSVGElement>) {
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
        d="M10 14.0634L17.0711 6.99238C17.6569 6.40659 18.6066 6.40659 19.1924 6.99238C19.7782 7.57816 19.7782 8.52791 19.1924 9.1137L10.4632 17.8429C10.2074 18.0987 9.79262 18.0987 9.53681 17.8429L4.80761 13.1137C4.22183 12.5279 4.22183 11.5782 4.80761 10.9924C5.3934 10.4066 6.34315 10.4066 6.92893 10.9924L10 14.0634Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgCheckBold)
