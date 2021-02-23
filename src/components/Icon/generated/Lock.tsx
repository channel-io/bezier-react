import React from 'react'

function SvgLock(props: React.SVGProps<SVGSVGElement>) {
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
        d="M5.5 9H6V7a6 6 0 1112 0v2h.5a1.5 1.5 0 011.5 1.5v10a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 014 20.5v-10A1.5 1.5 0 015.5 9zM16 7v2H8V7a4 4 0 118 0zm2 4v9H6v-9h12zm-7.002 7v-5h2v5h-2z"
      />
    </svg>
  )
}

export default SvgLock
