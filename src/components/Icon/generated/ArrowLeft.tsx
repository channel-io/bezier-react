import React from 'react'

function SvgArrowLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.538 21.427l1.457-1.37L5.363 13H21v-2H5.389l6.606-7.03-1.457-1.37-7.881 8.386a1.5 1.5 0 000 2.055l7.881 8.386z"
      />
    </svg>
  )
}

export default SvgArrowLeft
