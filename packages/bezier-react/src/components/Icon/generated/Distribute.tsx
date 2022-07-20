import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'

function SvgDistribute(props: SVGProps<SVGSVGElement>) {
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
        d="M21.646 6.646a.5.5 0 0 1 0 .708l-3.622 3.622A.6.6 0 0 1 17 10.55V8h-.901a3 3 0 0 0-2.198.958l-2.272 2.445c-.24.26-.506.49-.79.69.212.17.412.357.596.562l2.117 2.352a3 3 0 0 0 2.23.993H17v-2.399a.6.6 0 0 1 1.024-.424l3.622 3.622a.5.5 0 0 1 0 .707l-3.622 3.622A.6.6 0 0 1 17 20.704V18h-1.219a5 5 0 0 1-3.716-1.655l-2.117-2.352A3 3 0 0 0 7.718 13H3a1 1 0 1 1 0-2h4.966a3 3 0 0 0 2.198-.958l2.271-2.445A5 5 0 0 1 16.1 6H17V3.449a.6.6 0 0 1 1.024-.425l3.622 3.622Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgDistribute)
