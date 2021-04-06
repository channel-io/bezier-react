import React from 'react'

function SvgChevronSmallLeft(props: React.SVGProps<SVGSVGElement>) {
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
        d="M14.207 17.207a1 1 0 01-1.414 0l-4.5-4.5a1 1 0 010-1.414l4.5-4.5a1 1 0 111.414 1.414L10.414 12l3.793 3.793a1 1 0 010 1.414z"
      />
    </svg>
  )
}

export default SvgChevronSmallLeft
