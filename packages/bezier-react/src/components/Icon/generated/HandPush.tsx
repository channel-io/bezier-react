import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgHandPush')
function SvgHandPush(props: SVGProps<SVGSVGElement>) {
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
        d="M6.439 2.742a5.963 5.963 0 0 1 8.423 0c1.875 1.875 2.244 4.759 1.019 7.034l-1.9-.716c.975-1.542.778-3.592-.533-4.904a3.959 3.959 0 0 0-5.595 0 3.97 3.97 0 0 0-.001 5.595L6.44 11.167a5.777 5.777 0 0 1-.544-.623c-1.783-2.355-1.55-5.71.543-7.802Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.406 7.115c0-1.175.91-2.137 2.066-2.219l.158-.005c1.228 0 2.224.996 2.224 2.224v3.254l5.643 2.126a3.548 3.548 0 0 1 2.298 3.122l.005.2v.599c0 .884-.169 1.762-.498 2.586a6.195 6.195 0 0 1-5.754 3.896h-.686a6.2 6.2 0 0 1-4.382-1.816l-4.83-4.829a2.225 2.225 0 0 1 3.148-3.145l.608.609V7.115Zm2.648 0a.424.424 0 0 0-.848 0v8.562c0 .884-1.073 1.323-1.687.698l-1.993-1.993a.426.426 0 0 0-.602.6l4.829 4.827a4.4 4.4 0 0 0 3.11 1.289h.685a4.395 4.395 0 0 0 4.083-2.764c.244-.611.37-1.263.37-1.918v-.598c0-.73-.453-1.382-1.137-1.638l-6.81-2.566v-4.5Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgHandPush)
