import React from 'react'

function SvgRepeat(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22 8v9a1 1 0 01-1 1H8.207l1.828 1.83-1.414 1.413-3.182-3.182a1.502 1.502 0 010-2.122l3.182-3.182 1.414 1.414-1.828 1.83H20V8h2zm-6.62-5.242l3.18 3.182a1.502 1.502 0 010 2.12l-3.182 3.183-1.415-1.414 1.83-1.83H4v8H2V7a1 1 0 011-1h12.793l-1.83-1.827 1.415-1.414z"
      />
    </svg>
  )
}

export default SvgRepeat
