import React from 'react'

function SvgEmailUnread(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.896 5v2H4v.938l7.999 4.889 3.728-2.276 1.043 1.706-3.856 2.357a1.75 1.75 0 01-1.683.079l-.143-.079-7.089-4.332L4 17h16v-5h2v5.5a1.5 1.5 0 01-1.355 1.493L20.5 19h-17a1.5 1.5 0 01-1.493-1.355L2 17.5v-11a1.5 1.5 0 011.356-1.493L3.5 5h10.396zm5.604 5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
      />
    </svg>
  )
}

export default SvgEmailUnread
