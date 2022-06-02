import * as React from 'react'
import { SVGProps } from 'react'
import createBezierIcon from '../createBezierIcon'

function SvgBook(props: SVGProps<SVGSVGElement>) {
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
        d="M16.071 3h4.43A1.5 1.5 0 0 1 22 4.5v14a1.5 1.5 0 0 1-1.5 1.5h-4.43c-1.06 0-2.078.422-2.828 1.17l-.535.537a1 1 0 0 1-1.415 0l-.536-.536a4 4 0 0 0-2.828-1.17H3.5A1.5 1.5 0 0 1 2 18.5v-14A1.5 1.5 0 0 1 3.5 3h4.43A6 6 0 0 1 12 4.591 6.004 6.004 0 0 1 16.07 3Zm3.93 2h-3.93c-1.06 0-2.078.422-2.828 1.17L13 6.415v12.431A6.003 6.003 0 0 1 16.071 18h3.93V5Zm-9 13.846V6.414l-.244-.243a4 4 0 0 0-2.828-1.17H4v13h3.93a6 6 0 0 1 3.07.845Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgBook)
