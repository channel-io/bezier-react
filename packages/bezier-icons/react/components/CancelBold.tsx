import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgCancelBold(props: SVGProps<SVGSVGElement>) {
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
        d="M4.92893 4.92893C4.34315 5.51472 4.34315 6.46447 4.92893 7.05025L9.87868 12L4.92893 16.9497C4.34315 17.5355 4.34315 18.4853 4.92893 19.0711C5.51472 19.6569 6.46447 19.6569 7.05025 19.0711L12 14.1213L16.9497 19.0711C17.5355 19.6569 18.4853 19.6569 19.0711 19.0711C19.6569 18.4853 19.6569 17.5355 19.0711 16.9497L14.1213 12L19.0711 7.05025C19.6569 6.46447 19.6569 5.51472 19.0711 4.92893C18.4853 4.34315 17.5355 4.34315 16.9497 4.92893L12 9.87868L7.05025 4.92893C6.46447 4.34315 5.51472 4.34315 4.92893 4.92893Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgCancelBold)
