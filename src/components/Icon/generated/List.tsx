import React from 'react'

function SvgList(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.5 6.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm0 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM6 19a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM21 6H8V4h13v2zM8 13h13v-2H8v2zm13 7H8v-2h13v2z"
      />
    </svg>
  )
}

export default SvgList
