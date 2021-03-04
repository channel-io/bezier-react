import React from 'react'

function SvgTool(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="currentColor">
        <path
          fill="currentColor"
          d="M6.664 6.664a1 1 0 01-1.411.003L3.836 5.25a2 2 0 000 2.828l.943.943a2.668 2.668 0 003.192.44l2.385 2.683-1.935 1.934 1.415 1.415 1.851-1.852 5.67 6.378a1.886 1.886 0 102.662-2.663l-6.378-5.669L17.2 8.13l.707.707 2.828-4.243-1.414-1.414-4.243 2.828.707.708-3.641 3.641L9.46 7.971a2.668 2.668 0 00-.44-3.192l-.943-.943a2 2 0 00-2.828 0l2.357 2.357-.94-.94a1 1 0 01-.003 1.411z"
        />
        <path
          fill="currentColor"
          d="M10.543 16.2L6.3 20.442a2 2 0 01-2.828-2.828l4.242-4.243 2.829 2.829z"
        />
      </g>
    </svg>
  )
}

export default SvgTool
