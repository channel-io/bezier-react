import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgLinkCopyIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M19.358 4.63a2.152 2.152 0 0 0-3.043 0l-.707.707-1.414-1.414.707-.707a4.152 4.152 0 0 1 5.871 5.871l-2.576 2.577a4.153 4.153 0 0 1-5.872 0l-.707-.706 1.413-1.415.708.707c.84.84 2.203.84 3.044 0l2.576-2.577c.84-.84.84-2.203 0-3.043Zm-4.115 4.116a2.153 2.153 0 0 0-3.044 0l-2.569 2.57a2.152 2.152 0 0 0 3.042 3.042l.707-.707 1.415 1.415-.708.707A4.15 4.15 0 1 1 8.216 9.9l2.569-2.569a4.153 4.153 0 0 1 5.872 0l.707.707-1.414 1.414-.707-.707ZM4 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-6h-2v5H5V5h5V3H4Z"
      />
    </svg>
  )
}

export default createIcon(SvgLinkCopyIcon)
