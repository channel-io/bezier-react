import React from 'react'

function SvgTrophy(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 4h10v5A5 5 0 017 9V4zm10.745 9a7.012 7.012 0 01-3.83 2.735A2.996 2.996 0 0016.365 17h.136a.5.5 0 01.5.5v4a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5v-4a.5.5 0 01.5-.5h.136c1.01 0 1.905-.5 2.448-1.265A7.012 7.012 0 016.254 13H6a4 4 0 01-4-4V6a2 2 0 012-2h1a2 2 0 012-2h10a2 2 0 012 2h1a2 2 0 012 2v3a4 4 0 01-4 4h-.255zM5 6H4v3a2 2 0 001.248 1.854A7.008 7.008 0 015 9V6zm13.752 4.854A2 2 0 0020 9V6h-1v3a7.01 7.01 0 01-.248 1.854zM9 18.812V20h6v-1.188a5.012 5.012 0 01-3-2.37 5.012 5.012 0 01-3 2.37z"
      />
    </svg>
  )
}

export default SvgTrophy
