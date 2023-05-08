import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgBrowserEdge')
function SvgBrowserEdge(props: SVGProps<SVGSVGElement>) {
  const Svg = (
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
        d="M21.974 9.812C21.55 5.319 17.137 2 12.008 2c-4.57 0-8.424 3.064-9.622 7.25a7.09 7.09 0 0 1 1.22-1.256c1.657-1.327 3.944-1.928 5.97-1.567 2.439.434 4.55 2.145 5.136 4.16.353 1.218.111 2.391-.678 3.366a.532.532 0 0 0 .109.767c1.853 1.305 5.934.714 7.31-2.011.451-.893.616-1.902.521-2.897Zm-14.84 4.517c.167-1.27.805-2.483 1.796-3.417.722-.679 1.569-1.14 2.36-1.301a2.491 2.491 0 0 1 2.371.524 5.126 5.126 0 0 0-1.314-1.582 6.367 6.367 0 0 0-2.912-1.331C8.02 6.97 5.88 7.206 4.11 8.624c-.973.78-1.673 1.807-2.075 3.03a.672.672 0 0 0-.034.2c-.083 5.522 4.447 10.141 9.97 10.161.098 0 .195 0 .293-.003-1.432-.357-2.44-1.04-3.118-1.696-1.556-1.503-2.309-3.742-2.013-5.987Zm2.372-2.321c0 3.979 5.61 7.49 10.536 4.87.298-.157.612.181.432.466a10.058 10.058 0 0 1-2.572 2.751c-1.753 1.28-4.018 1.67-6.065.944a5.853 5.853 0 0 1-2.13-1.303c-1.374-1.327-2.036-3.308-1.773-5.302.143-1.085.693-2.128 1.55-2.934l.078-.072.015-.013a2.52 2.52 0 0 0-.071.593Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgBrowserEdge)
