import React from 'react'

function SvgChevronSmallRight(props: React.SVGProps<SVGSVGElement>) {
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
        d="M9.793 6.793a1 1 0 011.414 0l4.5 4.5a1 1 0 010 1.414l-4.5 4.5a1 1 0 01-1.414-1.414L13.586 12 9.793 8.207a1 1 0 010-1.414z"
      />
    </svg>
  )
}

export default SvgChevronSmallRight
