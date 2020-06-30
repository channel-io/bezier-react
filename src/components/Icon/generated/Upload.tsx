import React from 'react'

function SvgUpload(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 12v8h16v-8h2v9a1 1 0 01-1 1H3a1 1 0 01-1-1v-9h2zm6.94-9.56a1.498 1.498 0 012.12 0l4.475 4.474-1.414 1.414-3.12-3.121V16h-2V5.205L7.877 8.328 6.464 6.914z"
      />
    </svg>
  )
}

export default SvgUpload
