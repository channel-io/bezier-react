import React from 'react'

function SvgHome(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 21h5a1 1 0 001-1v-5a2 2 0 114 0v5a1 1 0 001 1h5a1 1 0 001-1V9.978c0-.617-.285-1.2-.772-1.579l-7.614-5.921a1 1 0 00-1.228 0L3.772 8.399A2.005 2.005 0 003 9.98V20a1 1 0 001 1z"
      />
    </svg>
  )
}

export default SvgHome
