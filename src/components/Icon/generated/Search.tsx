import React from 'react'

function SvgSearch(props: React.SVGProps<SVGSVGElement>) {
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
        d="M18 10a8 8 0 10-3.094 6.32L21 22.414 22.414 21l-6.094-6.094A7.965 7.965 0 0018 10zm-2 0a6 6 0 11-12 0 6 6 0 0112 0z"
      />
    </svg>
  )
}

export default SvgSearch
