import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'

function SvgKakaoFilledAlt(props: SVGProps<SVGSVGElement>) {
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
        d="M12 2C5.93 2 1 5.864 1 10.676c0 3.094 2.063 5.81 5.156 7.356l-.214.748c-.326 1.138-.875 3.05-.906 3.24a.289.289 0 0 0 .103.261.337.337 0 0 0 .261 0c.344-.048 4.015-2.626 4.647-3.073.647.092 1.3.138 1.953.138 6.078 0 11-3.878 11-8.67S18.07 2 12 2Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgKakaoFilledAlt)
