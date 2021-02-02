import React from 'react'

function SvgPause(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.5 21h4a.5.5 0 00.5-.5v-17a.5.5 0 00-.5-.5h-4a.5.5 0 00-.5.5v17a.5.5 0 00.5.5zm9 0h4a.5.5 0 00.5-.5v-17a.5.5 0 00-.5-.5h-4a.5.5 0 00-.5.5v17a.5.5 0 00.5.5z"
      />
    </svg>
  )
}

export default SvgPause
