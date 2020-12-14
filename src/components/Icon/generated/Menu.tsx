import React from 'react'

function SvgMenu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 6h18V4H3v2zm0 7h18v-2H3v2zm18 7H3v-2h18v2z"
      />
    </svg>
  )
}

export default SvgMenu
