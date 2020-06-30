import React from 'react'

function SvgChevronLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.904 20.057l-1.458 1.37-7.88-8.386a1.5 1.5 0 010-2.055l7.88-8.386 1.458 1.37-7.56 8.044 7.56 8.043z"
      />
    </svg>
  )
}

export default SvgChevronLeft
