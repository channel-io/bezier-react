import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgVolumeUpFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M13.014 2h1a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1h-1a.997.997 0 0 1-.707-.294L7.6 17H3.014a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1H7.6l4.707-4.707A.997.997 0 0 1 13.014 2Zm6.393 4.414c.39-.39 1.029-.394 1.373.038a8.917 8.917 0 0 1 0 11.095c-.344.432-.983.429-1.373.038-.39-.39-.383-1.02-.053-1.462a6.917 6.917 0 0 0 0-8.247c-.33-.442-.338-1.072.053-1.462ZM16.99 8.83c.39-.39 1.034-.394 1.347.06a5.497 5.497 0 0 1 0 6.219c-.314.455-.956.45-1.346.06-.391-.39-.374-1.02-.11-1.505a3.497 3.497 0 0 0 0-3.329c-.264-.485-.281-1.114.11-1.505Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgVolumeUpFilled)
