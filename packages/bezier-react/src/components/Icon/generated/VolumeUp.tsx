import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgVolumeUp(props: SVGProps<SVGSVGElement>) {
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
        d="m12.96 2-.131.008a1 1 0 0 0-.576.284L7.545 7H2.96a1 1 0 0 0-1 1v8l.007.117A1 1 0 0 0 2.96 17l4.585-.001 4.708 4.708a1 1 0 0 0 .707.293h1a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-1Zm0 2.413v15.172l-4.293-4.293-.099-.086a1 1 0 0 0-.608-.207h-4v-6h4a1 1 0 0 0 .707-.292l4.293-4.294Zm6.447 2c.39-.39 1.029-.393 1.373.039a8.917 8.917 0 0 1 0 11.095c-.344.432-.983.429-1.373.039s-.383-1.02-.053-1.463a6.917 6.917 0 0 0 0-8.247c-.33-.442-.338-1.072.053-1.462ZM16.99 8.83c.39-.39 1.034-.394 1.347.06a5.497 5.497 0 0 1 0 6.219c-.314.455-.956.45-1.346.06-.391-.39-.374-1.02-.11-1.505a3.497 3.497 0 0 0 0-3.329c-.264-.485-.281-1.114.11-1.505Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgVolumeUp)
