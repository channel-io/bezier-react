import React from 'react'

function SvgLockOpen(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1a6 6 0 016 6v2h.5a1.5 1.5 0 011.5 1.5v10a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 014 20.5v-10A1.5 1.5 0 015.5 9H16V7a4 4 0 00-3.8-3.995L12 3c-1.275 0-2.449.6-3.2 1.6L7.2 3.4A5.99 5.99 0 0112 1zm6 10H6v9h12v-9zm-3.502 3.5v2h-5v-2h5z"
      />
    </svg>
  )
}

export default SvgLockOpen
