import * as React from 'react'
import { SVGProps } from 'react'

function SvgHome(props: SVGProps<SVGSVGElement>) {
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
        d="M12.614 2.477a1 1 0 0 0-1.228 0L3.772 8.4A2 2 0 0 0 3 9.98V20a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-5a1 1 0 1 1 2 0v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9.978a2 2 0 0 0-.772-1.579l-7.614-5.922ZM9 19v-4a3 3 0 1 1 6 0v4h4V9.978l-7-5.444L5 10v9h4Z"
      />
    </svg>
  )
}

export default SvgHome
