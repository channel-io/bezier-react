import * as React from 'react'
import { SVGProps } from 'react'
import createBezierIcon from '../createBezierIcon'

function SvgPageDownload(props: SVGProps<SVGSVGElement>) {
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
        d="M7 4v16h5v2H6.5A1.5 1.5 0 0 1 5 20.5v-17A1.5 1.5 0 0 1 6.5 2h5.27c.44 0 .86.193 1.139.524l5.72 6.674c.116.13.204.279.266.437a1 1 0 0 1-.93 1.365h-5.58C11.62 11 11 10.38 11 9.615V4H7Zm6 5h2.826L13 5.704V9Zm6 9.718V13h-2v5.726l-2.37-2.187-1.357 1.47 4.716 4.35 4.738-4.346-1.352-1.474L19 18.718Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgPageDownload)
