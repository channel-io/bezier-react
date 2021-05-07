import React from 'react'

function SvgMultiNode(props: React.SVGProps<SVGSVGElement>) {
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
        d="M12 2a3 3 0 00-1 5.83V11H6a3 3 0 00-3 3v2.17a3.001 3.001 0 102 0V14a1 1 0 011-1h12a1 1 0 011 1v2.17a3.001 3.001 0 102 0V14a3 3 0 00-3-3h-5V7.83A3.001 3.001 0 0012 2z"
      />
    </svg>
  )
}

export default SvgMultiNode
