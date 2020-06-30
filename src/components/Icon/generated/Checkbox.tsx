import React from 'react'

function SvgCheckbox(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17 3a4 4 0 014 4v10c0 2.21-1.79 4-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4zm0 2H7c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zm0 2.446l1.414 1.414-7.554 7.555-4.274-4.276L8 10.725l2.86 2.861L17 7.446z"
      />
    </svg>
  )
}

export default SvgCheckbox
