import * as React from 'react'
import { SVGProps } from 'react'
import createBezierIcon from '../createBezierIcon'

function SvgChannelSmileFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10a9.968 9.968 0 0 1-.826 3.986c-.319.733-.432 1.554-.185 2.314l.785 2.425a.833.833 0 0 1-1.05 1.05l-2.424-.786c-.76-.247-1.581-.134-2.314.185A9.968 9.968 0 0 1 12 22C6.477 22 2 17.523 2 12Zm7.692-2.692c0 1.274-.336 2.307-1.346 2.307S7 10.582 7 9.308C7 8.033 7.337 7 8.346 7c1.01 0 1.346 1.033 1.346 2.308ZM12 14.692c-1.555 0-2.356-1.257-2.605-2.145-.083-.296.161-.547.468-.547h4.274c.307 0 .551.252.468.547-.25.888-1.05 2.145-2.605 2.145Zm5-5.384c0 1.274-.337 2.307-1.346 2.307-1.01 0-1.346-1.033-1.346-2.307 0-1.275.336-2.308 1.346-2.308S17 8.033 17 9.308Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgChannelSmileFilled)
