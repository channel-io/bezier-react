import React from 'react'

function SvgHelpFilled(props: React.SVGProps<SVGSVGElement>) {
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
        d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm.83 12.541h-1.9v-.708c0-1.156.625-2.24 1.672-2.9.867-.546 1.337-.939 1.337-1.447 0-1.014-1-1.561-1.94-1.561-1.035 0-1.942.73-1.942 1.56h-1.9c0-1.875 1.758-3.46 3.841-3.46 2.154 0 3.842 1.52 3.842 3.46 0 1.655-1.393 2.533-2.225 3.056-.236.15-.784.573-.784 1.292v.708zm-.889 3.631a1.244 1.244 0 110-2.487 1.244 1.244 0 010 2.487z"
      />
    </svg>
  )
}

export default SvgHelpFilled
