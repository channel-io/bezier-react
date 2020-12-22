import React from 'react'

function SvgPoint(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zM9 8h3.5a3 3 0 110 6H11v2H9V8zm2 4h1.5a1 1 0 100-2H11v2z"
      />
    </svg>
  )
}

export default SvgPoint
