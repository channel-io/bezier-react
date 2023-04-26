import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgChannelUp')
function SvgChannelUp(props: SVGProps<SVGSVGElement>) {
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
        d="M11.998 4a7.938 7.938 0 0 0-5.65 2.337c-1.84 1.838-2.658 4.386-2.242 6.99.542 3.386 3.303 6.095 6.716 6.588a7.966 7.966 0 0 0 4.926-.855c.642-.342 1.357-.412 2.015-.193l1.656.551-.552-1.655c-.218-.656-.15-1.37.193-2.015.884-1.655 1.15-3.52.774-5.394a7.944 7.944 0 0 0-6.49-6.245A8.445 8.445 0 0 0 11.999 4ZM12 22c-.486 0-.975-.035-1.464-.106-4.27-.617-7.726-4.01-8.404-8.25-.52-3.247.503-6.426 2.804-8.722 2.302-2.297 5.483-3.312 8.728-2.787 4.053.656 7.32 3.8 8.13 7.824.47 2.335.135 4.662-.97 6.73-.047.09-.118.266-.06.442l.869 2.604c.18.542.042 1.13-.363 1.535a1.495 1.495 0 0 1-1.535.362l-2.605-.868c-.174-.058-.351.013-.44.06A9.92 9.92 0 0 1 12 22ZM8.786 10.807c-.845 0-1.198-.61-1.198-2.105s.353-2.105 1.198-2.105 1.2.61 1.2 2.105c0 1.494-.355 2.105-1.2 2.105Zm5.229-2.105c0 1.494.353 2.105 1.198 2.105s1.199-.61 1.199-2.105-.354-2.105-1.198-2.105c-.846 0-1.2.61-1.2 2.105Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgChannelUp)
