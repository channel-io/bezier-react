import React from 'react'

function SvgString(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 7a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V7zm4.41 0a.5.5 0 00-.49.402l-1.8 9a.5.5 0 00.49.598h.98a.5.5 0 00.49-.402L6.4 15h3.2l.32 1.598a.5.5 0 00.49.402h.98a.5.5 0 00.49-.598l-1.8-9A.5.5 0 009.59 7H6.41zM7.6 9l-.8 4h2.4l-.8-4h-.8zm11.9-1.5A.5.5 0 0019 7h-5.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h3.697l-4.098 5.505a.5.5 0 00-.099.299V16.5a.5.5 0 00.5.5H19a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-3.699l4.1-5.505a.5.5 0 00.099-.299V7.5z"
      />
    </svg>
  )
}

export default SvgString
