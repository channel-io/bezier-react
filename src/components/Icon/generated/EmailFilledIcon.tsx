import * as React from 'react'
import { SVGProps } from 'react'

function SvgEmailFilledIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M3.5 19h17a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 20.5 5h-17A1.5 1.5 0 0 0 2 6.5v11A1.5 1.5 0 0 0 3.5 19Zm.52-9.533a1 1 0 0 1 1.341-.35l6.64 3.711 6.638-3.712a1 1 0 0 1 .977 1.745l-6.702 3.753a1.748 1.748 0 0 1-1.826 0l-6.703-3.753a1 1 0 0 1-.365-1.394Z"
      />
    </svg>
  )
}

export default SvgEmailFilledIcon
