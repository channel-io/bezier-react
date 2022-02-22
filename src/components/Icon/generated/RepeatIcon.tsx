import * as React from 'react'
import { SVGProps } from 'react'

function SvgRepeatIcon(props: SVGProps<SVGSVGElement>) {
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
        d="m15.379 11.243-1.415-1.414 1.83-1.83H4v8H2V7a1 1 0 0 1 1-1h12.793l-1.829-1.827 1.415-1.414L18.56 5.94a1.501 1.501 0 0 1 0 2.12l-3.182 3.183ZM20 16V8h2v9a1 1 0 0 1-1 1H8.207l1.828 1.83-1.414 1.413-3.182-3.182a1.502 1.502 0 0 1 0-2.122l3.182-3.182 1.414 1.414-1.828 1.83H20Z"
      />
    </svg>
  )
}

export default SvgRepeatIcon
