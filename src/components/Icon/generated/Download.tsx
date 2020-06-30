import React from 'react'

function SvgDownload(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 12v8h16v-8h2v9a1 1 0 01-1 1H3a1 1 0 01-1-1v-9h2zm9-10v10.793l3.121-3.121 1.414 1.414-4.475 4.475-.113.103c-.59.48-1.459.446-2.008-.103l-4.475-4.475 1.414-1.414L11 12.795V2h2z"
      />
    </svg>
  )
}

export default SvgDownload
