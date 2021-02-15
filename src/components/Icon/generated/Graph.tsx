import React from 'react'

function SvgGraph(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.776 21h-3.551a.475.475 0 01-.474-.475V3.475c0-.263.212-.475.474-.475h3.55c.263 0 .476.212.476.475v17.05a.475.475 0 01-.475.475zm6.75 0h-3.551a.475.475 0 01-.474-.475V8.475c0-.263.212-.475.474-.475h3.55c.263 0 .476.212.476.475v12.05a.475.475 0 01-.475.475zM3.52 21h3.46a.52.52 0 00.52-.52v-4.96a.52.52 0 00-.52-.52H3.52a.519.519 0 00-.52.52v4.96c0 .288.232.52.52.52z"
      />
    </svg>
  )
}

export default SvgGraph
