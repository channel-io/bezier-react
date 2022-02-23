import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgEditIcon(props: SVGProps<SVGSVGElement>) {
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
        d="m18.465 4.12 1.414 1.416 1.415-1.415a1 1 0 0 0 0-1.414h-.001a1 1 0 0 0-1.414 0L18.465 4.12ZM20.5 21h-17a.5.5 0 0 1-.5-.5v-17a.5.5 0 0 1 .5-.5H14v2H5v14h14v-9h2v10.5a.5.5 0 0 1-.5.5Zm-9.814-6.272H9.272v-1.414l8.485-8.485 1.414 1.414-8.485 8.485Z"
      />
    </svg>
  )
}

export default createIcon(SvgEditIcon)
