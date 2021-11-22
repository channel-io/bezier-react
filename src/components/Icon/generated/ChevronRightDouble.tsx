import React from 'react'

function SvgChevronRightDouble(props: React.SVGProps<SVGSVGElement>) {
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
        d="M6.76 4.35a1 1 0 00-1.52 1.3L10.684 12 5.24 18.35a1 1 0 001.518 1.3l6-7a1 1 0 000-1.3l-6-7z"
      />
      <path
        fill="currentColor"
        d="M14.76 4.35a1 1 0 00-1.52 1.3L18.684 12l-5.442 6.35a1 1 0 001.518 1.3l6-7a1 1 0 000-1.3l-6-7z"
      />
    </svg>
  )
}

export default SvgChevronRightDouble
