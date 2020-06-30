import React from 'react'

function SvgBlock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm6.336 5.051L7.05 18.336A8.04 8.04 0 0018.335 7.051zM12 3.961A8.04 8.04 0 005.665 16.95L16.949 5.664A8.009 8.009 0 0012 3.961z"
      />
    </svg>
  )
}

export default SvgBlock
