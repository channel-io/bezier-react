import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgCameraFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M16.5826 4.47101C16.2212 3.8686 15.5701 3.5 14.8676 3.5H9.13238C8.42985 3.5 7.77884 3.8686 7.41739 4.47101L6.7913 5.5145C6.61058 5.8157 6.28507 6 5.93381 6H5C3.34315 6 2 7.34315 2 9V17C2 18.6569 3.34315 20 5 20H19C20.6569 20 22 18.6569 22 17V9C22 7.34315 20.6569 6 19 6H18.0662C17.7149 6 17.3894 5.8157 17.2087 5.5145L16.5826 4.47101ZM12.0002 18C8.9672 18 6.5002 15.532 6.5002 12.5C6.5002 9.467 8.9672 7 12.0002 7C15.0332 7 17.5002 9.467 17.5002 12.5C17.5002 15.532 15.0332 18 12.0002 18ZM8.0002 12.5C8.0002 10.291 9.7912 8.5 12.0002 8.5C14.2092 8.5 16.0002 10.291 16.0002 12.5C16.0002 14.709 14.2092 16.5 12.0002 16.5C9.7912 16.5 8.0002 14.709 8.0002 12.5Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgCameraFilled)
