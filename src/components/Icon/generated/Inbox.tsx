import React from 'react'

function SvgInbox(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 7v5h-5a3 3 0 11-6 0H4V7h16zm.5-2h-17C2.673 5 2 5.673 2 6.5v11c0 .827.673 1.5 1.5 1.5h17c.827 0 1.5-.673 1.5-1.5v-11c0-.827-.673-1.5-1.5-1.5z"
      />
    </svg>
  )
}

export default SvgInbox
