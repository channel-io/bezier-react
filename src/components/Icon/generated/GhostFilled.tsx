import React from 'react'

function SvgGhostFilled(props: React.SVGProps<SVGSVGElement>) {
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
        d="M15.12 11.468c-.821 0-1.164-.582-1.164-2.008 0-1.425.343-2.008 1.163-2.008.82 0 1.164.583 1.164 2.008 0 1.426-.343 2.008-1.164 2.008zm-6.24 0c-.82 0-1.162-.582-1.162-2.008 0-1.425.342-2.008 1.163-2.008.82 0 1.163.583 1.163 2.008 0 1.426-.343 2.008-1.163 2.008zM12 2C7.876 2 4.5 5.316 4.5 9.368v9.898c0 1.361 1.755 1.949 2.6.872v-.001a1.468 1.468 0 012.299 0l.768.978c.928 1.18 2.738 1.18 3.666 0l.768-.978a1.468 1.468 0 012.298 0v.001c.846 1.077 2.601.489 2.601-.872V9.368C19.5 5.316 16.125 2 12 2z"
      />
    </svg>
  )
}

export default SvgGhostFilled
