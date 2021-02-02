import React from 'react'

function SvgTemplate(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 8.001H7v-1H4v10h4v2H3.5A1.5 1.5 0 012 17.5v-11A1.5 1.5 0 013.5 5H7V4h10v1h3.5A1.5 1.5 0 0122 6.5V8h-2V7h-3v1.001zm-5.586 14H10v-1.415l8.485-8.485 1.414 1.414L11.414 22zm7.778-10.607l1.415 1.414 1.414-1.414a1 1 0 10-1.414-1.415l-1.415 1.415z"
      />
    </svg>
  )
}

export default SvgTemplate
