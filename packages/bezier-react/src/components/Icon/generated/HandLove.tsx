import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgHandLove')
function SvgHandLove(props: SVGProps<SVGSVGElement>) {
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
        d="M18.58 16.858A4.977 4.977 0 0 1 13.937 20h-.779a4.968 4.968 0 0 1-3.533-1.462l-5.5-5.495a.457.457 0 0 1-.136-.325c0-.072.017-.21.162-.354a.5.5 0 0 1 .714-.006l2.26 2.264A1.1 1.1 0 0 0 9 13.841V4.5a.5.5 0 0 1 1 0v8.995A2.506 2.506 0 0 0 12.5 16c.565 0 1.081-.197 1.5-.514.42.317.935.514 1.5.514 1.378 0 2.5-1.123 2.5-2.505v-2.5l.007-3.525a.48.48 0 0 1 .48-.477c.281 0 .511.228.511.51L19 14.678c0 .748-.14 1.482-.42 2.18ZM12.5 10c.276 0 .5.226.5.504v2.99a.503.503 0 0 1-.5.506.503.503 0 0 1-.5-.505v-2.992c0-.277.224-.503.5-.503Zm3 0c.276 0 .5.226.5.504v2.99a.503.503 0 0 1-.5.506.503.503 0 0 1-.5-.505v-2.992c0-.277.224-.503.5-.503Zm5.498-2.498a2.513 2.513 0 0 0-2.512-2.51 2.483 2.483 0 0 0-2.479 2.473v.585A2.477 2.477 0 0 0 14 8.513a2.477 2.477 0 0 0-2-.463V4.5C12 3.121 10.877 2 9.5 2A2.503 2.503 0 0 0 7 4.5v7.166l-.72-.72a2.478 2.478 0 0 0-1.767-.735H4.51a2.532 2.532 0 0 0-1.8.765 2.452 2.452 0 0 0-.72 1.741c0 .66.257 1.277.722 1.742l5.5 5.494A6.957 6.957 0 0 0 13.158 22h.78a6.967 6.967 0 0 0 6.498-4.4A7.822 7.822 0 0 0 21 14.676l-.002-7.174Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgHandLove)
