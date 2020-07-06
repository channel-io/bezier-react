import React from 'react'

function SvgTemplate(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.485 12.101l1.414 1.414L11.414 22H10v-1.414l8.485-8.485zM17 4v1h3.5a1.5 1.5 0 011.493 1.356L22 6.5V8h-2V7h-3v1.001H7V7H4v10h4v2H3.5A1.5 1.5 0 012 17.5v-11A1.5 1.5 0 013.5 5H7V4h10zm5.02 5.979a.998.998 0 010 1.415l-1.413 1.414-1.415-1.414 1.415-1.415a1 1 0 011.414 0z"
      />
    </svg>
  )
}

export default SvgTemplate
