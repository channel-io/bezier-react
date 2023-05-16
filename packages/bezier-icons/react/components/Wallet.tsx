import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgWallet(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20 3a1.002 1.002 0 0 0-1.217-.976L3.566 5.406A2 2 0 0 0 2 7.358V18.5A1.5 1.5 0 0 0 3.5 20h17a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 20.5 6H20V3Zm-8.783 2.754L18 4.246v1.508h-6.783ZM4 8h16v2h-3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h3v2H4V8Zm16 5a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgWallet)
