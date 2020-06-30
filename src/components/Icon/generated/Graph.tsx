import React from 'react'

function SvgGraph(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.526 8c.262 0 .475.212.475.475v12.05a.475.475 0 01-.475.475h-3.551a.475.475 0 01-.474-.475V8.475c0-.263.212-.475.474-.475h3.55zm-6.75-5c.262 0 .475.212.475.475v17.05a.475.475 0 01-.475.475h-3.551a.475.475 0 01-.474-.475V3.475c0-.263.212-.475.474-.475h3.55zM6.98 15a.52.52 0 01.52.52v4.96a.52.52 0 01-.52.52H3.52a.519.519 0 01-.52-.52v-4.96c0-.288.232-.52.52-.52h3.46z"
      />
    </svg>
  )
}

export default SvgGraph
