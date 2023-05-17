import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgTag(props: SVGProps<SVGSVGElement>) {
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
        d="M10.0467 19.6033L19.9973 9.65283V3.99969H14.3441L4.39348 13.9502L10.0467 19.6033ZM2.62572 12.8893L13.5162 2H21.997V10.4807L11.1065 21.3711C10.8236 21.654 10.4466 21.81 10.0467 21.81H10.0457C9.64475 21.81 9.2688 21.654 8.98584 21.3711L2.62572 15.01C2.0408 14.4251 2.0408 13.4743 2.62572 12.8893ZM18.6122 7.02824C18.6122 7.85711 17.9413 8.52801 17.1124 8.52801C16.2845 8.52801 15.6126 7.85711 15.6126 7.02824C15.6126 6.19937 16.2845 5.52847 17.1124 5.52847C17.9413 5.52847 18.6122 6.19937 18.6122 7.02824Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgTag)
