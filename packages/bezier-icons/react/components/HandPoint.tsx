import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgHandPoint(props: SVGProps<SVGSVGElement>) {
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
        d="M4.51 12.213a.502.502 0 0 0-.5.5c0 .077.018.226.145.354l5.47 5.468A4.963 4.963 0 0 0 13.16 20h.777a4.977 4.977 0 0 0 4.643-3.142c.278-.698.42-1.431.42-2.181V14c0-.829-.522-1.581-1.298-1.872L10 9.225V3.5a.5.5 0 0 0-1 0v10.341c0 .445-.266.844-.677 1.015-.412.172-.882.08-1.199-.235l-2.26-2.262a.502.502 0 0 0-.355-.146ZM13.936 22h-.777a6.951 6.951 0 0 1-4.95-2.051l-5.469-5.468a2.486 2.486 0 0 1-.732-1.768c0-.669.26-1.297.733-1.769a2.505 2.505 0 0 1 3.535.001l.723.723V3.5C7 2.121 8.121 1 9.5 1 10.878 1 12 2.121 12 3.5v4.342l6.405 2.414A4.016 4.016 0 0 1 21 14v.677c0 1.006-.19 1.989-.564 2.923a6.966 6.966 0 0 1-6.499 4.4Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgHandPoint)
