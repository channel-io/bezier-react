import React from 'react'

function SvgChevronLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.904 19.057l-1.458 1.37-6.892-7.39a1.5 1.5 0 010-2.046L14.446 3.6l1.458 1.37-6.56 7.044 6.56 7.043z"
      />
    </svg>
  )
}

export default SvgChevronLeft
