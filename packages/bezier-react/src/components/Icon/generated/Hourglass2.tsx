import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgHourglass2(props: SVGProps<SVGSVGElement>) {
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
        d="M17 6.553c0 .38-.145.754-.418 1.078l-2.895 3.439a1.443 1.443 0 0 0 0 1.862l2.896 3.437c.272.325.417.697.417 1.079V20H7v-2.552c0-.381.145-.754.418-1.08l2.895-3.437a1.443 1.443 0 0 0 0-1.862L7.418 7.63C7.145 7.307 7 6.934 7 6.55V4h10v2.553Zm2 0V4c0-1.102-.897-2-2-2H7c-1.103 0-2 .898-2 2v2.552c0 .859.307 1.678.888 2.368L8.482 12 5.89 15.08C5.307 15.77 5 16.589 5 17.448V20c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-2.552c0-.848-.316-1.69-.888-2.368L15.518 12l2.593-3.08c.582-.69.89-1.51.89-2.367ZM16.227 6.5H7.772l.693.822 2.77 3.289a.997.997 0 0 0 1.53 0l2.77-3.289.692-.822Zm-5.658 8.89c.422-.296.916-.45 1.431-.45.514 0 1.01.155 1.431.45 2.289 1.6 2.539 1.774 2.566 1.978.003.025.003.05.003.08V19H8v-1.552c0-.03 0-.055.004-.08.027-.204.277-.378 2.565-1.978Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgHourglass2)
