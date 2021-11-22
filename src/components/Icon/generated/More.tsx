import React from 'react'

function SvgMore(props: React.SVGProps<SVGSVGElement>) {
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
        d="M4.5 14.5A2.507 2.507 0 012 12c0-1.375 1.125-2.5 2.5-2.5S7 10.625 7 12s-1.125 2.5-2.5 2.5zm7.5 0A2.507 2.507 0 019.5 12c0-1.375 1.125-2.5 2.5-2.5s2.5 1.125 2.5 2.5-1.125 2.5-2.5 2.5zm5-2.5c0 1.375 1.125 2.5 2.5 2.5S22 13.375 22 12s-1.125-2.5-2.5-2.5A2.507 2.507 0 0017 12z"
      />
    </svg>
  )
}

export default SvgMore
