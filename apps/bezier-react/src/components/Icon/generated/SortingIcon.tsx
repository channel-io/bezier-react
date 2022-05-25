import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgSortingIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M3.016 5a1 1 0 0 0 1 1h16a1 1 0 1 0 0-2h-16a1 1 0 0 0-1 1ZM3 12a1 1 0 0 0 1 1h9a1 1 0 1 0 0-2H4a1 1 0 0 0-1 1Zm1.016 8a1 1 0 1 1 0-2h5a1 1 0 1 1 0 2h-5Zm14.999-2.208 2.535-2.535 1.414 1.414-3.89 3.89a1.494 1.494 0 0 1-1.06.438c-.384 0-.768-.146-1.06-.439l-3.89-3.889 1.415-1.414 2.536 2.537.004-7.795 2 .001-.004 7.792Z"
      />
    </svg>
  )
}

export default createIcon(SvgSortingIcon)
