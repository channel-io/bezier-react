import React from 'react'

function SvgMenu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21 18v2H3v-2h18zm0-7v2H3v-2h18zm0-7v2H3V4h18z"
      />
    </svg>
  )
}

export default SvgMenu
