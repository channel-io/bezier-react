import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgSpaceVerticalIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M12.354 21.646a.5.5 0 0 1-.708 0l-3.963-3.963A.4.4 0 0 1 7.966 17H11V7H7.966a.4.4 0 0 1-.283-.683l3.963-3.963a.5.5 0 0 1 .707 0l3.964 3.963a.4.4 0 0 1-.283.683H13v10h3.034a.4.4 0 0 1 .283.683l-3.963 3.963Z"
      />
    </svg>
  )
}

export default createIcon(SvgSpaceVerticalIcon)
