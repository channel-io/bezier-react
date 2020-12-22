import React from 'react'

function SvgArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.457 21.427L12 20.057 18.632 13H3v-2h15.607L12 3.97l1.457-1.37 7.881 8.386a1.5 1.5 0 010 2.055l-7.88 8.386z"
      />
    </svg>
  )
}

export default SvgArrowRight
