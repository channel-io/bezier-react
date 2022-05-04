import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgNewIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M20.9 16.5c0 .276-.209.5-.467.5h-1.092a.468.468 0 0 1-.43-.303L17.634 13.5l-1.28 3.197a.467.467 0 0 1-.429.303h-1.092c-.257 0-.466-.224-.466-.5v-9c0-.276.21-.5.466-.5h.934c.257 0 .466.224.466.5v6l1.186-2.964a.227.227 0 0 1 .429 0l1.185 2.964v-6c0-.276.21-.5.468-.5h.932c.258 0 .467.224.467.5v9Zm-7.466-8c0 .276-.21.5-.468.5h-1.4v2h1.4c.259 0 .468.224.468.5v1c0 .276-.21.5-.468.5h-1.4v2h1.4c.259 0 .468.224.468.5v1c0 .276-.21.5-.468.5h-2.799c-.258 0-.467-.224-.467-.5v-9c0-.276.209-.5.467-.5h2.8c.258 0 .467.224.467.5v1Zm-4.668 8c0 .276-.209.5-.466.5h-.635c-.258 0-.467-.224-.467-.5l-1.23-4.73v4.73c0 .276-.21.5-.468.5h-.934c-.257 0-.466-.224-.466-.5v-9c0-.276.21-.5.466-.5h.767c.2 0 .379.138.443.342l1.125 4.14V7.5c0-.276.209-.5.466-.5H8.3c.257 0 .466.224.466.5v9ZM20.9 5H4.1C2.941 5 2 5.896 2 7v10c0 1.104.941 2 2.1 2h16.8c1.16 0 2.1-.896 2.1-2V7c0-1.104-.94-2-2.1-2Z"
      />
    </svg>
  )
}

export default createIcon(SvgNewIcon)
