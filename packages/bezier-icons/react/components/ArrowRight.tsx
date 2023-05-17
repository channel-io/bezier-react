import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgArrowRight(props: SVGProps<SVGSVGElement>) {
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
        d="M11.7287 20.7423C11.3263 20.3641 11.3066 19.7312 11.6848 19.3287L17.6322 13H4C3.44772 13 3 12.5523 3 12C3 11.4478 3.44772 11 4 11H17.6068L11.6848 4.69837C11.3066 4.29591 11.3263 3.66305 11.7287 3.28483C12.1312 2.90662 12.764 2.92628 13.1422 3.32874L20.3385 10.9863C20.881 11.5637 20.881 12.4634 20.3385 13.0408L13.1423 20.6984C12.764 21.1008 12.1312 21.1205 11.7287 20.7423Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgArrowRight)
