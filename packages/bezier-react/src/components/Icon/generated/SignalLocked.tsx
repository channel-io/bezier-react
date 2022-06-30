import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'

function SvgSignalLocked(props: SVGProps<SVGSVGElement>) {
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
        d="M6.343 17.657a8 8 0 0 1 0-11.314A1 1 0 0 0 4.93 4.93c-3.905 3.905-3.905 10.237 0 14.142a1 1 0 0 0 1.414-1.414Zm2.829-8.485a4 4 0 0 0 0 5.656 1 1 0 1 1-1.415 1.415 6 6 0 0 1 0-8.486 1 1 0 1 1 1.415 1.415ZM14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm5.5 3v-.5a1 1 0 1 0-2 0v.5h2Zm1.5.085V14.5a2.5 2.5 0 0 0-5 0v.585a1.5 1.5 0 0 0-1 1.415v3a1.5 1.5 0 0 0 1.5 1.5h4a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1-1.415Zm-6.172-7.332a1 1 0 0 1 1.415 0 5.986 5.986 0 0 1 1.26 1.848 1 1 0 1 1-1.834.798 3.986 3.986 0 0 0-.84-1.232 1 1 0 0 1 0-1.414Zm4.243-2.82a1 1 0 0 0-1.414 1.414 7.958 7.958 0 0 1 2.143 3.875 1 1 0 0 0 1.95-.444 9.958 9.958 0 0 0-2.679-4.845Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgSignalLocked)
