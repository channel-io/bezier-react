import React from 'react'

function SvgHelp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 00-8 8 8 8 0 108-8zm-.059 11.685a1.243 1.243 0 11.002 2.486 1.243 1.243 0 01-.002-2.486zm.057-9.66c2.154 0 3.842 1.52 3.842 3.46 0 1.654-1.393 2.533-2.225 3.056-.236.15-.784.573-.784 1.292v.708H10.93v-.708c0-1.156.625-2.24 1.672-2.9.867-.546 1.337-.939 1.337-1.447 0-1.014-1-1.561-1.94-1.561-1.035 0-1.942.73-1.942 1.56h-1.9c0-1.875 1.758-3.46 3.841-3.46z"
      />
    </svg>
  )
}

export default SvgHelp
