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
        d="M4.5 15A2.507 2.507 0 012 12.5C2 11.125 3.125 10 4.5 10S7 11.125 7 12.5 5.875 15 4.5 15zm7.5 0a2.507 2.507 0 01-2.5-2.5c0-1.375 1.125-2.5 2.5-2.5s2.5 1.125 2.5 2.5S13.375 15 12 15zm5-2.5c0 1.375 1.125 2.5 2.5 2.5s2.5-1.125 2.5-2.5-1.125-2.5-2.5-2.5a2.507 2.507 0 00-2.5 2.5z"
      />
    </svg>
  )
}

export default SvgMore
