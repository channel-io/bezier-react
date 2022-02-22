import * as React from 'react'
import { SVGProps } from 'react'

function SvgWebhookIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M8.75 16.01a1.99 1.99 0 0 0-.268-1l2.34-4.052-.867-.5a3.75 3.75 0 0 1 3.75-6.495l1-1.732a5.75 5.75 0 0 0-6.573 9.385L6.75 14.01a2 2 0 1 0 2 2Zm3.08-10.799a2 2 0 0 1 1.732 3l1.383 2.394a5.752 5.752 0 0 1 4.84 10.385l-1-1.732a3.75 3.75 0 0 0-3.75-6.496l-.866.5-2.338-4.05a2 2 0 0 1 0-4Zm5.08 8.799a2 2 0 0 0-1.732 1H10.5v1a3.75 3.75 0 0 1-7.5 0H1a5.75 5.75 0 0 0 11.413 1h2.765a1.999 1.999 0 0 0 3.732-1 2 2 0 0 0-2-2Z"
      />
    </svg>
  )
}

export default SvgWebhookIcon
