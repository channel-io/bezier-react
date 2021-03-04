import React from 'react'

function SvgChevronRight(props: React.SVGProps<SVGSVGElement>) {
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
        d="M7.6 19.057l1.457 1.37 6.893-7.39a1.5 1.5 0 000-2.046L9.057 3.6 7.6 4.97l6.56 7.044-6.56 7.043z"
      />
    </svg>
  )
}

export default SvgChevronRight
