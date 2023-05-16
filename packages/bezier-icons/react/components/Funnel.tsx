import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgFunnel(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20 2a1 1 0 0 1 1 1v2.172a2 2 0 0 1-.586 1.414l-4.828 4.828A2 2 0 0 0 15 12.828v6.554a1 1 0 0 1-.553.894l-4 2A1 1 0 0 1 9 21.382v-8.554a2 2 0 0 0-.586-1.414L3.586 6.586A2 2 0 0 1 3 5.172V3a1 1 0 0 1 1-1h16Zm-1 2H5v1.172L9.828 10c.297.296.542.634.73 1h2.884c.154-.3.347-.58.574-.835l.156-.165L19 5.172V4Zm-6 9h-2v6.763l2-1V13Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgFunnel)
