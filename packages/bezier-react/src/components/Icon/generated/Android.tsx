import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgAndroid')
function SvgAndroid(props: SVGProps<SVGSVGElement>) {
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
        d="M13.8 5.5h.9v-.9h-.9v.9Zm-4.5 0h.9v-.9h-.9v.9Zm5.877-2.556 1.17-1.17a.446.446 0 0 0 0-.639.446.446 0 0 0-.639 0l-1.332 1.332A5.255 5.255 0 0 0 12 1.9c-.864 0-1.674.207-2.394.567L8.265 1.135a.446.446 0 0 0-.639 0 .446.446 0 0 0 0 .639l1.179 1.179A5.385 5.385 0 0 0 6.6 7.3h10.8a5.369 5.369 0 0 0-2.223-4.356ZM19.65 8.2c-.747 0-1.35.603-1.35 1.35v6.3c0 .747.603 1.35 1.35 1.35.747 0 1.35-.603 1.35-1.35v-6.3c0-.747-.603-1.35-1.35-1.35Zm-15.3 0C3.603 8.2 3 8.803 3 9.55v6.3c0 .747.603 1.35 1.35 1.35.747 0 1.35-.603 1.35-1.35v-6.3c0-.747-.603-1.35-1.35-1.35Zm2.25 9c0 .495.405.9.9.9h.9v3.15c0 .747.603 1.35 1.35 1.35.747 0 1.35-.603 1.35-1.35V18.1h1.8v3.15c0 .747.603 1.35 1.35 1.35.747 0 1.35-.603 1.35-1.35V18.1h.9c.495 0 .9-.405.9-.9v-9H6.6v9Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgAndroid)
