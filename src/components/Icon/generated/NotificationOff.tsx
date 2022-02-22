import * as React from 'react'
import { SVGProps } from 'react'

function SvgNotificationOff(props: SVGProps<SVGSVGElement>) {
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
        d="m17.385 13.605 1.494 2.398h-1.078L8.028 6.23c.695-1.317 2.062-2.227 3.652-2.227a4.15 4.15 0 0 1 4.145 4.145c0 1.93.539 3.817 1.56 5.457ZM6.565 4.768 3.549 1.75 2.134 3.164l18.385 18.385 1.414-1.415-2.132-2.131h.699a1.1 1.1 0 0 0 .933-1.682l-2.35-3.774a8.313 8.313 0 0 1-1.258-4.399 6.152 6.152 0 0 0-6.145-6.145 6.125 6.125 0 0 0-5.114 2.765Zm7.115 13.235c0 1.103-.897 2-2 2s-2-.897-2-2h4Zm-9.403-5.456-2.35 3.774a1.1 1.1 0 0 0 .933 1.682h4.82c0 2.206 1.794 4 4 4a3.999 3.999 0 0 0 3.989-3.89l-2.11-2.11H4.48l1.493-2.398a10.304 10.304 0 0 0 1.41-3.777l-1.84-1.841-.004.067c-.003.03-.005.062-.005.094a8.31 8.31 0 0 1-1.258 4.399Z"
      />
    </svg>
  )
}

export default SvgNotificationOff
