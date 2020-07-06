import React from 'react'

function SvgSiren(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.007 5a7 7 0 017 7v8h1v2h-16v-2h1v-8a7 7 0 017-7zM9 10a1 1 0 00-1 1v6a1 1 0 002 0v-6a1 1 0 00-1-1zM4.714 3.293l2 2L5.3 6.707l-2-2 1.414-1.414zm14.586 0l1.414 1.414-2 2L17.3 5.293l2-2zM13.007 1v3h-2V1h2z"
      />
    </svg>
  )
}

export default SvgSiren
