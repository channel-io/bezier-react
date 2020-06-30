import React from 'react'

function SvgLock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1a6 6 0 016 6v2h.5a1.5 1.5 0 011.5 1.5v10a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 014 20.5v-10A1.5 1.5 0 015.5 9H6V7a6 6 0 015.775-5.996zm6 10H6v9h12v-9zm-5.002 2v5h-2v-5h2zM12 3C9.79 3 8 4.79 8 7v2h8V7a4 4 0 00-3.8-3.995z"
      />
    </svg>
  )
}

export default SvgLock
