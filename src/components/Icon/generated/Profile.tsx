import React from 'react'

function SvgProfile(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.5 5c.827 0 1.5.673 1.5 1.5v11c0 .827-.673 1.5-1.5 1.5h-17c-.827 0-1.5-.673-1.5-1.5v-11C2 5.673 2.673 5 3.5 5zM20 7H4v10h16V7zm-2 6v2h-6v-2h6zM8 9a2 2 0 11-.001 4.001A2 2 0 018 9zm10 0v2h-6V9h6z"
      />
    </svg>
  )
}

export default SvgProfile
