import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgHomeFilledIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M3 20a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a2 2 0 1 1 4 0v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V9.978a2 2 0 0 0-.772-1.579l-7.614-5.922a1 1 0 0 0-1.228 0L3.772 8.4A2 2 0 0 0 3 9.98V20Z"
      />
    </svg>
  )
}

export default createIcon(SvgHomeFilledIcon)
