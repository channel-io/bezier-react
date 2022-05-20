import * as React from 'react'
import { SVGProps } from 'react'
import createBezierIcon from '../createBezierIcon'

function SvgSendForwardFailedFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M20.919 5.01h-18a1 1 0 0 0-.72 1.693l5.549 5.773 9.97-5.021.35.607-9.323 6.148 2.176 7.721a.998.998 0 0 0 1.463.595c.133-.078.25-.186.338-.32a6 6 0 0 1 5.784-10.016l3.279-5.68a1 1 0 0 0-.866-1.5ZM15.715 20.7c.391.186.823.3 1.285.3 1.654 0 3-1.346 3-3 0-.462-.114-.894-.3-1.285L15.714 20.7Zm2.57-5.399a2.954 2.954 0 0 0-1.285-.3c-1.654 0-3 1.345-3 3 0 .461.113.893.301 1.284l3.984-3.984ZM12 18.001a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgSendForwardFailedFilled)
