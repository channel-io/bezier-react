import React from 'react'

function SvgMusic(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20 15.835l-.006-.001L20 16a3 3 0 01-2.824 2.995L17 19a3 3 0 111-5.829V6.142L9 7.526v10.309l-.006-.001L9 18a3 3 0 01-2.824 2.995L6 21a3 3 0 111-5.829V4.692a1 1 0 01.848-.988l11-1.692A1 1 0 0120 3v12.835z"
      />
    </svg>
  )
}

export default SvgMusic
