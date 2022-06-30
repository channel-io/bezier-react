import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'

function SvgNotificationImportant(props: SVGProps<SVGSVGElement>) {
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
        d="M20 6a1 1 0 0 0 2 0V1a1 1 0 0 0-2 0v5Zm1 4.9a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4ZM6.295 13.602 4.8 16h14.398l-1.493-2.398a10.302 10.302 0 0 1-1.561-5.457A4.15 4.15 0 0 0 12 4a4.15 4.15 0 0 0-4.145 4.145c0 1.93-.54 3.817-1.56 5.457ZM10 18c0 1.103.897 2 2 2s2-.897 2-2h-4Zm8.145-9.855a8.31 8.31 0 0 0 1.258 4.4l2.35 3.773A1.1 1.1 0 0 1 20.82 18H16c0 2.206-1.794 4-4 4-2.205 0-4-1.794-4-4H3.18a1.1 1.1 0 0 1-.933-1.682l2.35-3.774a8.313 8.313 0 0 0 1.258-4.399A6.152 6.152 0 0 1 12 2a6.152 6.152 0 0 1 6.145 6.145Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgNotificationImportant)
