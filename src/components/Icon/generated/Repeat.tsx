import React from 'react'

function SvgRepeat(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.379 11.243l-1.415-1.414 1.83-1.83H4v8H2V7a1 1 0 011-1h12.793l-1.829-1.827 1.415-1.414L18.56 5.94a1.501 1.501 0 010 2.12l-3.182 3.183zM20 16V8h2v9a1 1 0 01-1 1H8.207l1.828 1.83-1.414 1.413-3.182-3.182a1.502 1.502 0 010-2.122l3.182-3.182 1.414 1.414-1.828 1.83H20z"
      />
    </svg>
  )
}

export default SvgRepeat
