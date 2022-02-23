import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgArrowHookRightDownIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M9.5 3.026H14v2H9.5a4.505 4.505 0 0 0-4.5 4.5c0 2.482 2.02 4.5 4.5 4.5h9.32l-4-4 1.415-1.414 5.326 5.328a1.501 1.501 0 0 1 0 2.12l-5.326 5.328-1.415-1.415 3.947-3.947H9.5a6.508 6.508 0 0 1-6.5-6.5c0-3.584 2.916-6.5 6.5-6.5Z"
      />
    </svg>
  )
}

export default createIcon(SvgArrowHookRightDownIcon)
