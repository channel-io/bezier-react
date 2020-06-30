import React from 'react'

function SvgShopping(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1c2.21 0 4 1.79 4 4v2h3.5A1.5 1.5 0 0121 8.5v8a4.5 4.5 0 01-4.5 4.5h-9A4.5 4.5 0 013 16.5v-8A1.5 1.5 0 014.5 7H8V5c0-2.21 1.79-4 4-4zm7 8H5v7.5a2.501 2.501 0 002.336 2.495L7.5 19h9a2.501 2.501 0 002.495-2.336L19 16.5V9zM9 10a1 1 0 110 2 1 1 0 010-2zm6 0a1 1 0 110 2 1 1 0 010-2zm-3-7a2.001 2.001 0 00-1.995 1.85L10 5v2h4V5a2.001 2.001 0 00-1.85-1.995L12 3z"
      />
    </svg>
  )
}

export default SvgShopping
