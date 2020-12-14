import React from 'react'

function SvgDesktop(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 14h16V6H4v8zM20.5 4h-17C2.673 4 2 4.673 2 5.5v9c0 .827.673 1.5 1.5 1.5H11v2H8v2h8v-2h-3v-2h7.5c.827 0 1.5-.673 1.5-1.5v-9c0-.827-.673-1.5-1.5-1.5z"
      />
    </svg>
  )
}

export default SvgDesktop
