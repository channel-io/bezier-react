import React from 'react'

function SvgTrash(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.5 2A1.5 1.5 0 0116 3.5V5h4v2h-1v13.5c0 .764-.563 1.419-1.318 1.493l-.144.007H6.461c-.825 0-1.46-.689-1.46-1.5V7H4V5h4V3.5C8 2.672 8.67 2 9.5 2zM17 7H7v13h10V7zm-6 3v7H9v-7h2zm4 0v7h-2v-7h2zm-1-6h-4v1h4V4z"
      />
    </svg>
  )
}

export default SvgTrash
