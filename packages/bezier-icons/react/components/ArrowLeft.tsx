import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgArrowLeft(props: SVGProps<SVGSVGElement>) {
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
        d="M12.2667 20.7423C12.6691 20.3641 12.6888 19.7312 12.3106 19.3287L6.36319 13H20C20.5523 13 21 12.5523 21 12C21 11.4478 20.5523 11 20 11H6.38858L12.3106 4.69837C12.6888 4.29591 12.6691 3.66305 12.2667 3.28483C11.8642 2.90662 11.2314 2.92628 10.8531 3.32874L3.65692 10.9863C3.11436 11.5637 3.11436 12.4634 3.65692 13.0408L10.8531 20.6984C11.2314 21.1008 11.8642 21.1205 12.2667 20.7423Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgArrowLeft)
