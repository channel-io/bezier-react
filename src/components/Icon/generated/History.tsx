import React from 'react'

function SvgHistory(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 2c5.522 0 10 4.478 10 10 0 5.523-4.477 10-10 10S2 17.523 2 12h2a8 8 0 102.343-5.657l.042-.042L8.48 8.396a.5.5 0 01-.267.847l-.086.007H2.5a.5.5 0 01-.5-.5V3.123a.5.5 0 01.854-.354l2.118 2.117A9.97 9.97 0 0112 2zm1 4v5.316l3.53 1.807-.912 1.78L11 12.54V6h2z"
      />
    </svg>
  )
}

export default SvgHistory
