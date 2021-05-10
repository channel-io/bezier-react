import React from 'react'

function SvgShopping(props: React.SVGProps<SVGSVGElement>) {
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
        d="M16 5a4 4 0 00-8 0v2H4.5A1.5 1.5 0 003 8.5v8A4.5 4.5 0 007.5 21h9a4.5 4.5 0 004.5-4.5v-8A1.5 1.5 0 0019.5 7H16V5zm-2 2V5a2 2 0 00-1.85-1.995L12 3a2 2 0 00-1.995 1.85L10 5v2h4zM8 9H5v7.5a2.5 2.5 0 002.336 2.495L7.5 19h9a2.5 2.5 0 002.495-2.336L19 16.5V9H8zm1 3a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2z"
      />
    </svg>
  )
}

export default SvgShopping
