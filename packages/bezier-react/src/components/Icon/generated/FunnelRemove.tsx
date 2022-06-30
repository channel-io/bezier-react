import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'

function SvgFunnelRemove(props: SVGProps<SVGSVGElement>) {
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
        d="M15 12.828V11h-4.442a3.998 3.998 0 0 0-.73-1L5 5.172V4h8V2H4a1 1 0 0 0-1 1v2.172a2 2 0 0 0 .586 1.414l4.828 4.828A2 2 0 0 1 9 12.828v8.554a1 1 0 0 0 1.447.894l4-2a1 1 0 0 0 .553-.894V12.828ZM13 13v5.763l-2 1V13h2Zm1.463-9.121L16.584 6l-2.121 2.121 1.414 1.415 2.121-2.122 2.122 2.122 1.414-1.415-2.121-2.12 2.12-2.122-1.413-1.414-2.122 2.12-2.121-2.12-1.414 1.414Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgFunnelRemove)
