import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgTextfieldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        d="M4 5.333A.667.667 0 0 0 3.333 6v4a.667.667 0 1 0 1.334 0V6A.667.667 0 0 0 4 5.333Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.667 3.333a2 2 0 0 0-2 2v5.334a2 2 0 0 0 2 2h10.666a2 2 0 0 0 2-2V5.333a2 2 0 0 0-2-2H2.667Zm10.666 1.334H2.667A.667.667 0 0 0 2 5.333v5.334c0 .368.299.666.667.666h10.666a.667.667 0 0 0 .667-.666V5.333a.667.667 0 0 0-.667-.666Z"
      />
    </svg>
  )
}

export default createIcon(SvgTextfieldIcon)
