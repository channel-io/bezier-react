import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgRotateIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M12.003 2.218a9.933 9.933 0 0 0-7.027 2.889l-2.119-2.12a.5.5 0 0 0-.854.354v5.627a.5.5 0 0 0 .5.5H8.13a.5.5 0 0 0 .353-.854L6.39 6.52a7.944 7.944 0 0 1 5.613-2.303c4.411 0 8 3.589 8 8 0 4.41-3.589 8-8 8-4.41 0-8-3.59-8-8h-2c0 5.514 4.486 10 10 10s10-4.486 10-10-4.486-10-10-10Z"
      />
    </svg>
  )
}

export default createIcon(SvgRotateIcon)
