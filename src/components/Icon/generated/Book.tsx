import React from 'react'

function SvgBook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.93 3A6 6 0 0112 4.592 6.004 6.004 0 0116.07 3h4.43c.827 0 1.5.672 1.5 1.5v14c0 .828-.673 1.5-1.5 1.5h-4.43c-1.06 0-2.078.422-2.828 1.17l-.535.537c-.39.39-1.024.391-1.415 0l-.536-.536a3.998 3.998 0 00-2.828-1.17H3.5c-.828 0-1.5-.673-1.5-1.5v-14A1.5 1.5 0 013.5 3h4.43zm0 2H4v13h3.93c1.09 0 2.15.297 3.072.846L11 6.416l-.243-.245a3.998 3.998 0 00-2.828-1.17zM20 5h-3.929c-1.06 0-2.078.422-2.828 1.17L13 6.413v12.434a5.989 5.989 0 013.071-.846h3.93V5z"
      />
    </svg>
  )
}

export default SvgBook
