import * as React from 'react'
import { SVGProps } from 'react'

function SvgLinkOffIcon(props: SVGProps<SVGSVGElement>) {
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
        d="m13.256 13.404 1.414 1.414 3.948-3.948a5.274 5.274 0 0 0 0-7.45 5.272 5.272 0 0 0-7.451 0L8.839 5.747l1.414 1.414 2.328-2.327c1.235-1.235 3.386-1.235 4.623 0 .617.617.957 1.438.957 2.311s-.34 1.694-.957 2.311l-3.948 3.948ZM5.303 20.58a5.248 5.248 0 0 0 3.726 1.541 5.248 5.248 0 0 0 3.725-1.54l2.328-2.328-1.414-1.414-2.328 2.327c-1.236 1.234-3.388 1.234-4.623 0a3.247 3.247 0 0 1-.957-2.31c0-.874.34-1.694.957-2.312l3.948-3.948-1.414-1.414-3.948 3.948a5.274 5.274 0 0 0 0 7.45ZM18 16h4v-2h-4v2Zm0 1.586L16.586 19l2.828 2.828 1.414-1.414L18 17.586ZM6 6.414 3.171 3.586l1.414-1.414L7.415 5 6 6.414ZM6 10H2V8h4v2Z"
      />
    </svg>
  )
}

export default SvgLinkOffIcon
