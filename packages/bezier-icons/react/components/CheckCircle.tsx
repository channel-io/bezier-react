import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgCheckCircle(props: SVGProps<SVGSVGElement>) {
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
        d="M22 12C22 17.523 17.5226 22 12 22C6.47672 22 2 17.5233 2 12C2 6.47672 6.47672 2 12 2C17.5226 2 22 6.47704 22 12ZM20 12C20 7.58165 16.4181 4 12 4C7.58128 4 4 7.58128 4 12C4 16.4187 7.58128 20 12 20C16.4181 20 20 16.4184 20 12ZM7.97112 11.2241L10.7544 13.8959L16.405 8.58647L17.7745 10.044L10.7396 16.6541L6.58609 12.6669L7.97112 11.2241Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgCheckCircle)
