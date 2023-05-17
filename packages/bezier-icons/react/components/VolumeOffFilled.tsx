import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgVolumeOffFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M21.5461 19.425C21.9366 19.8155 21.9366 20.4485 21.5461 20.839C21.1556 21.2295 20.5226 21.2295 20.1321 20.839L3.1611 3.868C2.77063 3.47753 2.77063 2.84447 3.1611 2.454C3.55156 2.06353 4.18463 2.06353 4.5751 2.454L8.3541 6.233L12.2931 2.293C12.4811 2.106 12.7351 2 13.0001 2H14.0001C14.5521 2 15.0001 2.448 15.0001 3V12.879L21.5461 19.425ZM2.0002 8.00011C2.0002 7.44811 2.4482 7.00011 3.0002 7.00011H4.8792L15.0002 17.1211V21.0001C15.0002 21.5521 14.5522 22.0001 14.0002 22.0001H13.0002C12.7352 22.0001 12.4802 21.8951 12.2932 21.7071L7.5862 17.0001H3.0002C2.4482 17.0001 2.0002 16.5521 2.0002 16.0001V8.00011Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgVolumeOffFilled)
