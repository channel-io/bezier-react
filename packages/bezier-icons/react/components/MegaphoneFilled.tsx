import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgMegaphoneFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M20.138 2.018a.86.86 0 0 0-.427.115l-6.51 3.727a.86.86 0 0 1-.428.114H4a1 1 0 0 0-1 1V15a1 1 0 0 0 1 1h2.668l-.908 4.4a.5.5 0 0 0 .49.6h3.321a.8.8 0 0 0 .783-.638L11.255 16h1.518a.86.86 0 0 1 .428.114l6.51 3.727a.86.86 0 0 0 1.29-.747V2.88a.862.862 0 0 0-.863-.862Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgMegaphoneFilled)
