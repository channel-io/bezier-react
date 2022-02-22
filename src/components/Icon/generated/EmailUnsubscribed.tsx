import * as React from 'react'
import { SVGProps } from 'react'

function SvgEmailUnsubscribed(props: SVGProps<SVGSVGElement>) {
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
        d="M22 13.944V6.5A1.5 1.5 0 0 0 20.5 5h-17A1.5 1.5 0 0 0 2 6.5v11A1.5 1.5 0 0 0 3.5 19h10.37a5.004 5.004 0 0 1-.121-2H4v-6.717l7.088 4.331c.56.343 1.265.343 1.826 0L20 10.284v2.587a4.978 4.978 0 0 1-1.3-.17 5 5 0 1 0 0 10 5 5 0 0 0 3.3-8.757Zm-2-6.005V7H4v.94l8 4.888 8-4.889ZM17.415 20.4c.391.187.823.301 1.285.301 1.654 0 3-1.346 3-3 0-.462-.114-.894-.3-1.285L17.414 20.4Zm2.57-5.398a2.954 2.954 0 0 0-1.285-.3c-1.654 0-3 1.345-3 3 0 .461.113.893.301 1.284l3.984-3.984Z"
      />
    </svg>
  )
}

export default SvgEmailUnsubscribed
