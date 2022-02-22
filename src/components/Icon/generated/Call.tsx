import * as React from 'react'
import { SVGProps } from 'react'

function SvgCall(props: SVGProps<SVGSVGElement>) {
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
        d="m20.035 20.994-.527-.08A19.58 19.58 0 0 1 3.085 4.488l-.08-.523a.456.456 0 0 1 .384-.52l2.78-.423a1.99 1.99 0 0 1 2.209 1.406l.786 2.668a1.989 1.989 0 0 1-.502 1.97l-1.387 1.388a17.412 17.412 0 0 0 6.27 6.271l1.389-1.388a1.993 1.993 0 0 1 1.97-.502l2.668.786a1.992 1.992 0 0 1 1.406 2.208l-.043.28-.38 2.501a.458.458 0 0 1-.52.384Z"
      />
    </svg>
  )
}

export default SvgCall
