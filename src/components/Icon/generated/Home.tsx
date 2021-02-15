import React from 'react'

function SvgHome(props: React.SVGProps<SVGSVGElement>) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.614 2.477a1 1 0 00-1.228 0L3.772 8.4A2 2 0 003 9.98V20a1 1 0 001 1h6a1 1 0 001-1v-5a1 1 0 112 0v5a1 1 0 001 1h6a1 1 0 001-1V9.978a2 2 0 00-.772-1.579l-7.614-5.922zM9 19v-4a3 3 0 116 0v4h4V9.978l-7-5.444L5 10v9h4z"
      />
    </svg>
  )
}

export default SvgHome
