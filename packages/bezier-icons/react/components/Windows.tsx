import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgWindows(props: SVGProps<SVGSVGElement>) {
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
        d="M21.0002 11.5733V2.96631L11.2232 4.41031V11.6143L21.0002 11.5733ZM3.0005 5.62621L10.3615 4.53821V11.6172L3.0005 11.6482V5.62621ZM3.0002 18.513V12.421L10.3612 12.451V19.544L3.0002 18.513ZM20.9998 21.0341L11.2228 19.6651V12.4551L20.9998 12.4961V21.0341Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgWindows)
