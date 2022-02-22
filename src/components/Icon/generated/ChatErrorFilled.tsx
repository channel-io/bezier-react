import * as React from 'react'
import { SVGProps } from 'react'

function SvgChatErrorFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M20.723 18.19c-.166-.496-.147-1.046.1-1.507 1.038-1.949 1.458-4.274.964-6.729-.805-4-4.094-7.165-8.123-7.817A10.013 10.013 0 0 0 2.13 13.675c.653 4.028 3.817 7.316 7.818 8.121 2.456.494 4.782.072 6.731-.967.46-.245 1.003-.264 1.496-.1l.554.184 1.37.457a1 1 0 0 0 1.263-1.265l-.638-1.915Zm-8.79-2.595a1.322 1.322 0 1 0 .001 2.645 1.322 1.322 0 0 0 0-2.645Zm1.214-9.615-.133 8.007h-2.162L10.72 5.98h2.427Z"
      />
    </svg>
  )
}

export default SvgChatErrorFilled
