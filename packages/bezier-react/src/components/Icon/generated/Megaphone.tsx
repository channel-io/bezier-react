import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'

function SvgMegaphone(props: SVGProps<SVGSVGElement>) {
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
        d="m19 17.13-4.806-2.752a2.856 2.856 0 0 0-1.42-.378H9V7.974h3.773c.498 0 .99-.13 1.421-.378L19 4.846v12.283ZM5 14h2V7.974H5V14ZM20.138 2.018a.86.86 0 0 0-.427.115l-6.51 3.727a.86.86 0 0 1-.428.114H4a1 1 0 0 0-1 1V15a1 1 0 0 0 1 1h.668l-.908 4.4a.5.5 0 0 0 .49.6h2.321a.8.8 0 0 0 .783-.638L8.255 16h4.518a.86.86 0 0 1 .428.114l6.51 3.727a.86.86 0 0 0 1.29-.747V2.88a.862.862 0 0 0-.863-.862Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgMegaphone)
