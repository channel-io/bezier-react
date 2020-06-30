import React from 'react'

function SvgCreditcard(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.5 5c.827 0 1.5.673 1.5 1.5v11c0 .827-.673 1.5-1.5 1.5h-17c-.827 0-1.5-.673-1.5-1.5v-11C2 5.673 2.673 5 3.5 5zm-.5 7H4v5h16v-5zm-10 1v2H6v-2h4zm10-6H4v2h16V7z"
      />
    </svg>
  )
}

export default SvgCreditcard
