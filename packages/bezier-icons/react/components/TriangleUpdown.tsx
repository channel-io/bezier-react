import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgTriangleUpdown(props: SVGProps<SVGSVGElement>) {
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
        d="M12.378 4.43641C12.1786 4.20618 11.8214 4.20617 11.622 4.43641L7.16209 9.58631C7.02187 9.74822 7.13689 9.99997 7.35107 9.99997H16.6489C16.8631 9.99997 16.9781 9.74822 16.8379 9.58631L12.378 4.43641Z"
      />
      <path
        fill="currentColor"
        d="M12.378 19.5635C12.1786 19.7938 11.8214 19.7938 11.622 19.5635L7.16209 14.4136C7.02187 14.2517 7.13689 14 7.35107 14H16.6489C16.8631 14 16.9781 14.2517 16.8379 14.4136L12.378 19.5635Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgTriangleUpdown)
