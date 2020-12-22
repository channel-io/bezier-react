import React from 'react'

function SvgMusic(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.848 3.704A1 1 0 007 4.692v10.479a3 3 0 101.996 2.664H9V7.526l9-1.385v7.029a3 3 0 101.995 2.664H20V3a1 1 0 00-1.152-.988l-11 1.692z"
      />
    </svg>
  )
}

export default SvgMusic
