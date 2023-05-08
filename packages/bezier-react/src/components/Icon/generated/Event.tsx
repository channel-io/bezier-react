import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgEvent')
function SvgEvent(props: SVGProps<SVGSVGElement>) {
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
        d="M6.243 5.332a7.54 7.54 0 0 1 12.513 0c1.762 2.573 1.597 6.013-.146 8.599l-5.666 8.408a.534.534 0 0 1-.888 0L6.39 13.931c-1.743-2.586-1.907-6.026-.146-8.599Zm8.536 8.614L12.5 12.29l-2.278 1.655c-.528.383-1.237-.133-1.035-.752l.87-2.679L7.778 8.86c-.526-.383-.256-1.217.396-1.217h2.816l.87-2.678c.202-.62 1.078-.62 1.28 0l.87 2.678h2.816c.652 0 .922.834.396 1.217l-2.279 1.655.87 2.679c.202.62-.507 1.135-1.034.752Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgEvent)
