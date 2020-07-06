import React from 'react'

function SvgInfo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 00-8 8 8 8 0 108-8zm1 6v8h-2v-8h2zm-1-4a1.5 1.5 0 11.001 3.001A1.5 1.5 0 0112 6z"
      />
    </svg>
  )
}

export default SvgInfo
