import React from 'react'

function SvgWebhook(props: React.SVGProps<SVGSVGElement>) {
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
        d="M8.75 16.01a1.99 1.99 0 00-.268-1l2.34-4.052-.867-.5a3.75 3.75 0 013.75-6.495l1-1.732a5.75 5.75 0 00-6.573 9.385L6.75 14.01a2 2 0 102 2zm3.08-10.799a2 2 0 011.732 3l1.383 2.394a5.752 5.752 0 014.84 10.385l-1-1.732a3.75 3.75 0 00-3.75-6.496l-.866.5-2.338-4.05a2 2 0 010-4zm5.08 8.799a2 2 0 00-1.732 1H10.5v1a3.75 3.75 0 01-7.5 0H1a5.75 5.75 0 0011.413 1h2.765a1.999 1.999 0 003.732-1 2 2 0 00-2-2z"
      />
    </svg>
  )
}

export default SvgWebhook
