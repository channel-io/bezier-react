import * as React from 'react'
import { SVGProps } from 'react'
import createBezierIcon from '../createBezierIcon'

function SvgBot(props: SVGProps<SVGSVGElement>) {
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
        d="M12.023 2a3 3 0 0 1 3 3h-6a3 3 0 0 1 3-3ZM20 19.998H4a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2Zm0-2v-10H4v10h16ZM6.742 12.972c0 1.787.422 2.516 1.432 2.516s1.432-.729 1.432-2.516c0-1.786-.422-2.515-1.432-2.515s-1.432.73-1.432 2.515Zm9.112 2.516c-1.01 0-1.432-.729-1.432-2.516 0-1.786.422-2.515 1.432-2.515s1.432.73 1.432 2.515c0 1.787-.422 2.516-1.432 2.516Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgBot)
