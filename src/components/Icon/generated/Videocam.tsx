import React from 'react'

function SvgVideocam(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.998 6H4.002a2 2 0 00-2 2v8a2 2 0 002 2h9.996a2 2 0 002-2V8a2 2 0 00-2-2zm7.19 11.35l-4-3.2a.5.5 0 01-.187-.39v-3.52a.5.5 0 01.187-.39l4-3.2a.5.5 0 01.812.39v9.92a.5.5 0 01-.812.39z"
      />
    </svg>
  )
}

export default SvgVideocam
