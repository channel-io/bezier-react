import * as React from 'react'
import { SVGProps } from 'react'

function SvgFlush(props: SVGProps<SVGSVGElement>) {
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
        d="M12 7.413 9.88 9.535 8.465 8.121 10.587 6 8.465 3.88l1.414-1.415L12 4.585l2.12-2.12 1.415 1.413L13.415 6l2.12 2.122-1.413 1.414L12 7.413ZM17 20V6h2v14.5c0 .827-.656 1.5-1.462 1.5H6.461c-.805 0-1.46-.673-1.46-1.5V6h2v14h10Z"
      />
    </svg>
  )
}

export default SvgFlush
