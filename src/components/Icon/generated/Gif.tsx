import React from 'react'

function SvgGif(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20 8.5a.5.5 0 01-.5.5H16v2h2.5a.5.5 0 01.5.5v1a.5.5 0 01-.5.5H16v3.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v1zm-7 8a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v9zm-3-8a.5.5 0 01-.5.5H6v6h2v-2.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H6a2 2 0 01-2-2V9a2 2 0 012-2h3.5a.5.5 0 01.5.5v1zM20 5H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V7a2 2 0 00-2-2z"
      />
    </svg>
  )
}

export default SvgGif
