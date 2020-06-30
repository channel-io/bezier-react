import React from 'react'

function SvgComment(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20 2a1 1 0 011 1v14a1 1 0 01-1 1h-4.5l-2.7 3.6a1 1 0 01-1.6 0L8.5 18H4a1 1 0 01-1-1V3a1 1 0 011-1zm-1 2H5v12h4a1 1 0 01.8.4l2.2 2.933 2.2-2.933a1 1 0 01.8-.4h4V4zm-2 7v2H7v-2h10zm0-4v2H7V7h10z"
      />
    </svg>
  )
}

export default SvgComment
