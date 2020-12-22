import React from 'react'

function SvgShine(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <g fill="currentColor">
        <path
          fill="currentColor"
          d="M17.73 10.464a.25.25 0 01-.46 0L16.15 7.85l-2.614-1.12a.25.25 0 010-.46l2.614-1.12 1.12-2.614a.25.25 0 01.46 0l1.12 2.614 2.614 1.12a.25.25 0 010 .46L18.85 7.85l-1.12 2.614zM10.228 21.5a.25.25 0 01-.456 0l-2.272-5-5-2.272a.25.25 0 010-.456l5-2.272 2.272-5a.25.25 0 01.456 0l2.272 5 5 2.272a.25.25 0 010 .456l-5 2.272-2.272 5z"
        />
      </g>
    </svg>
  )
}

export default SvgShine
