import React from 'react'

function SvgIn(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 4h8v16h-8v2h9a1 1 0 001-1V3a1 1 0 00-1-1h-9v2zM2 13h10.793l-3.121 3.121 1.414 1.414 4.475-4.475.103-.114a1.5 1.5 0 00-.103-2.007l-4.475-4.475-1.414 1.414L12.795 11H2v2z"
      />
    </svg>
  )
}

export default SvgIn
