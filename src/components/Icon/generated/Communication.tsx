import React from 'react'

function SvgCommunication(props: React.SVGProps<SVGSVGElement>) {
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
        d="M9.781 16.962A5.96 5.96 0 019 14a6 6 0 1110.954 3.386L21 20l-2.614-1.046A5.972 5.972 0 0115 20a5.998 5.998 0 01-5.219-3.038zM7 14a8.001 8.001 0 017.219-7.962 6 6 0 10-10.173 6.348L3 15l2.614-1.046c.434.297.908.538 1.414.714A8.107 8.107 0 017 14zM9 1a8.003 8.003 0 017.472 5.135 8.003 8.003 0 015.7 11.411l.685 1.711a2 2 0 01-2.6 2.6l-1.71-.684a8.003 8.003 0 01-11.018-4.308 7.959 7.959 0 01-2.075-.693l-1.711.685a2 2 0 01-2.6-2.6l.684-1.71A8 8 0 019 1zm4 13a1 1 0 11-2 0 1 1 0 012 0zm2 1a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2z"
      />
    </svg>
  )
}

export default SvgCommunication
