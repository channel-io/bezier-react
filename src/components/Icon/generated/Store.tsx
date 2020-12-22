import React from 'react'

function SvgStore(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.5 3h-17A1.5 1.5 0 002 4.5v4.927l.513.491c.156.142.319.273.487.392v9.19l.007.145A1.5 1.5 0 004.5 21h15l.145-.007A1.5 1.5 0 0021 19.5v-9.19c.169-.12.331-.25.488-.393L22 9.422V4.5A1.5 1.5 0 0020.5 3zM19 11.168a5.194 5.194 0 01-3.908-.786l-.103-.074-.085.06a5.206 5.206 0 01-5.833-.008l-.078-.055-.084.06A5.21 5.21 0 015 11.164V19h3v-6h8v6h3v-7.832zM14 19v-4h-4v4h4zm6-14v3.556l-.026.022A3.2 3.2 0 0116 8.566V7h-2v1.552a3.201 3.201 0 01-4 .013V7H8v1.55a3.204 3.204 0 01-3.818.143L4 8.556V5h16z"
      />
    </svg>
  )
}

export default SvgStore
