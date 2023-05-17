import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgClock(props: SVGProps<SVGSVGElement>) {
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
        d="M20.0488 11.999C20.0488 16.4368 16.4378 20.0478 12 20.0478C7.56224 20.0478 3.95123 16.4368 3.95123 11.999C3.95123 7.56209 7.56238 3.95122 12 3.95122C16.4376 3.95122 20.0488 7.56209 20.0488 11.999ZM2 11.999C2 17.5144 6.4846 21.999 12 21.999C17.5154 21.999 22 17.5144 22 11.999C22 6.48443 17.5152 2 12 2C6.48477 2 2 6.48443 2 11.999ZM12 6.02083C12.5523 6.02083 13 6.46854 13 7.02083V11.3364L15.6397 12.688C16.1312 12.9397 16.3257 13.5422 16.074 14.0338C15.8223 14.5254 15.2197 14.7199 14.7281 14.4682L11.5442 12.8379C11.2102 12.6669 11 12.3232 11 11.9478V7.02083C11 6.46854 11.4477 6.02083 12 6.02083Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgClock)
