import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgVolumeDown(props: SVGProps<SVGSVGElement>) {
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
        d="m13 2-.131.009a1 1 0 0 0-.576.284L7.585 7H3a1 1 0 0 0-1 1v8l.007.117A1 1 0 0 0 3 17h4.586l4.707 4.707A1 1 0 0 0 13 22h1a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-1Zm0 2.414v15.171l-4.293-4.292-.099-.087A1 1 0 0 0 8 15H4V9h4a1 1 0 0 0 .707-.293L13 4.414Zm6.881 4.108c-.314-.454-.956-.45-1.347-.06l-.037.037c-.376.376-.38.976-.123 1.442.7 1.267.748 2.869.044 4.113-.267.47-.28 1.087.102 1.47.393.393 1.043.382 1.347-.084 1.358-2.08 1.42-4.886.014-6.918Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgVolumeDown)
