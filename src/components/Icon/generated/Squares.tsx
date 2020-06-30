import React from 'react'

function SvgSquares(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5 7v12h12v1.5a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5v-13a.5.5 0 01.5-.5H5zm15.5-4a.5.5 0 01.5.5v13a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5v-13a.5.5 0 01.5-.5h13zM19 5H9v10h10V5z"
      />
    </svg>
  )
}

export default SvgSquares
