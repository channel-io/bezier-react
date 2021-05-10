import React from 'react'

function SvgDownload(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.121 9.672l-3.12 3.12V2h-2v10.793L7.877 9.672l-1.414 1.414 4.475 4.475a1.5 1.5 0 002.121 0l4.475-4.475-1.414-1.414zM4.001 12v8h16v-8h2v9a1 1 0 01-1 1H3a1 1 0 01-1-1v-9h2z"
      />
    </svg>
  )
}

export default SvgDownload
