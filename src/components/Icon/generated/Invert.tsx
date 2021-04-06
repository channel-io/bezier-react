import React from 'react'

function SvgInvert(props: React.SVGProps<SVGSVGElement>) {
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
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 01-8 8v-3a5 5 0 000-10V4a8 8 0 018 8zm-8-5a5 5 0 000 10V7z"
      />
    </svg>
  )
}

export default SvgInvert
