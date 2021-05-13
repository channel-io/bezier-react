import React from 'react'

function SvgHyphenBold(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect fill="currentColor" x={5} y={10.5} width={14} height={3} rx={1} />
    </svg>
  )
}

export default SvgHyphenBold
