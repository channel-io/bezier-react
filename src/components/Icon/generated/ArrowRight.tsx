import React from 'react'

function SvgArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.457 2.6l7.881 8.386a1.5 1.5 0 010 2.055l-7.88 8.386L12 20.057 18.631 13H3v-2h15.607L12 3.97l1.457-1.37z"
      />
    </svg>
  )
}

export default SvgArrowRight
