import React from 'react'

function SvgVideocam(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.998 6a2 2 0 012 2v8a2 2 0 01-2 2H4.002a2 2 0 01-2-2V8a2 2 0 012-2h9.996zm7.19.65a.5.5 0 01.812.39v9.92a.5.5 0 01-.812.39l-4-3.2a.496.496 0 01-.187-.39v-3.52c0-.152.068-.296.187-.39z"
      />
    </svg>
  )
}

export default SvgVideocam
