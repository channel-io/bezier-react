import React from 'react'

function SvgString(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20 5a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V7a2 2 0 012-2h16zM9.59 7H6.41a.5.5 0 00-.49.402l-1.8 9a.5.5 0 00.49.598h.98a.5.5 0 00.49-.402L6.4 15h3.199l.32 1.6a.5.5 0 00.49.401h.981a.5.5 0 00.49-.598l-1.8-9A.499.499 0 009.59 7zM19 7h-5.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h3.697l-4.098 5.505a.501.501 0 00-.099.299V16.5a.5.5 0 00.5.5H19a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-3.699l4.1-5.505a.501.501 0 00.099-.299V7.5A.5.5 0 0019 7zM8.4 9l.799 3.999h-2.4L7.6 9h.8z"
      />
    </svg>
  )
}

export default SvgString
