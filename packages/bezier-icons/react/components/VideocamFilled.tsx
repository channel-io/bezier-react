import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgVideocamFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M13.9981 6.00012H4.00211C2.89711 6.00012 2.00211 6.89612 2.00211 8.00012V16.0001C2.00211 17.1041 2.89711 18.0001 4.00211 18.0001H13.9981C15.1031 18.0001 15.9981 17.1041 15.9981 16.0001V8.00012C15.9981 6.89612 15.1031 6.00012 13.9981 6.00012ZM21.1877 17.3495L17.1877 14.1505C17.0687 14.0545 17.0007 13.9115 17.0007 13.7595V10.2405C17.0007 10.0885 17.0687 9.94451 17.1877 9.84951L21.1877 6.64951C21.5147 6.38751 21.9997 6.62151 21.9997 7.04051V16.9605C21.9997 17.3795 21.5147 17.6125 21.1877 17.3495Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgVideocamFilled)
