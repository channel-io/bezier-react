import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgStringIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7Zm4.41 0a.5.5 0 0 0-.49.402l-1.8 9a.5.5 0 0 0 .49.598h.98a.5.5 0 0 0 .49-.402L6.4 15h3.2l.32 1.598a.5.5 0 0 0 .49.402h.98a.5.5 0 0 0 .49-.598l-1.8-9A.5.5 0 0 0 9.59 7H6.41ZM7.6 9l-.8 4h2.4l-.8-4h-.8Zm11.9-1.5A.5.5 0 0 0 19 7h-5.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3.697l-4.098 5.505a.5.5 0 0 0-.099.299V16.5a.5.5 0 0 0 .5.5H19a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-3.699l4.1-5.505a.5.5 0 0 0 .099-.299V7.5Z"
      />
    </svg>
  )
}

export default createIcon(SvgStringIcon)
