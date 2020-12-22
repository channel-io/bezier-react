import React from 'react'

function SvgBold(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 3h8.5a5.5 5.5 0 014.672 8.405A5.5 5.5 0 0114.5 21H5V3zm4 14v-3h5.5a1.5 1.5 0 010 3H9zM9 7v3h4.5a1.5 1.5 0 100-3H9z"
      />
    </svg>
  )
}

export default SvgBold
