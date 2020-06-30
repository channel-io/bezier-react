import React from 'react'

function SvgWebhook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.91 14.01a2 2 0 11-1.732 3.001l-2.765-.001A5.751 5.751 0 011 16.01h2a3.75 3.75 0 007.5 0v-1h4.678c.346-.598.992-1 1.732-1zm-5.08-8.799a2 2 0 011.733 3l1.382 2.394a5.75 5.75 0 014.84 10.385l-1-1.732a3.75 3.75 0 00-3.75-6.496l-.866.5-2.338-4.051a2 2 0 01-1.995-1.85l-.006-.15a2 2 0 012-2zm-4.98-.875a5.75 5.75 0 017.855-2.105l-1 1.732a3.75 3.75 0 00-3.75 6.495l.866.5-2.338 4.053A2 2 0 116.75 14.01l1.382-2.394a5.754 5.754 0 01-1.282-7.28z"
      />
    </svg>
  )
}

export default SvgWebhook
