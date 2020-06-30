import React from 'react'

function SvgBriefcase(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.5 3c.827 0 1.5.673 1.5 1.5V6h3.5c.827 0 1.5.673 1.5 1.5v11c0 .827-.673 1.5-1.5 1.5h-17c-.827 0-1.5-.673-1.5-1.5v-11C2 6.673 2.673 6 3.5 6H7V4.5C7 3.673 7.673 3 8.5 3zM20 16H4v2h16v-2zm0-8H4v6h16V8zm-6 3v2h-4v-2h4zm1-6H9v1h6V5z"
      />
    </svg>
  )
}

export default SvgBriefcase
