import React from 'react'

function SvgLockOpen(props: React.SVGProps<SVGSVGElement>) {
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
        d="M5.5 9H16V7a4 4 0 00-7.2-2.4L7.2 3.4A6 6 0 0118 7v2h.5a1.5 1.5 0 011.5 1.5v10a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 014 20.5v-10A1.5 1.5 0 015.5 9zM18 11v9H6v-9h12zm-8.502 3.5h5v2h-5v-2z"
      />
    </svg>
  )
}

export default SvgLockOpen
