import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'

function SvgBrowserIe(props: SVGProps<SVGSVGElement>) {
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
        d="M13.047 7.717c2.086 0 3.485 1.474 3.904 3.48H9.294c.38-2.006 1.666-3.48 3.753-3.48Zm6.88-3.538c1.015 1.056.745 2.949.288 3.838a8.48 8.48 0 0 0-4.13-3.408c1.081-.51 3.046-1.257 3.841-.43ZM4.46 19.33c-.607-.817.135-2.697.683-3.836a8.48 8.48 0 0 0 3.146 3.99c-.975.282-3.14.777-3.83-.154ZM17 13.53h4.433a8.38 8.38 0 0 0-.97-5.088c.486-.993 1.271-3.051.366-4.56-1.236-2.058-5.707-.942-7.374.172a8.453 8.453 0 0 0-8.666 6.642c2.08-3 4.705-3.684 4.705-3.684C7.393 7.882 4.6 12.68 4.6 12.68l-.056.086c-.682 1.038-1.552 2.746-1.981 5.17-.373 2.1.781 4.933 6.887 2.209a8.453 8.453 0 0 0 11.592-4.907h-4.615c-.672 1.23-1.838 2.037-3.38 2.037-2.178 0-3.485-1.603-3.799-3.746h7.753Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgBrowserIe)
