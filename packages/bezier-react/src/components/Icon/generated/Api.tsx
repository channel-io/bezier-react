import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgApi')
function SvgApi(props: SVGProps<SVGSVGElement>) {
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
        d="M9.5 17a.5.5 0 0 0 .5-.5V9a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V14h2v2.5a.5.5 0 0 0 .5.5h1ZM2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7Zm4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V12H6V9.5Zm5-1.7c0-.28 0-.42.055-.527a.5.5 0 0 1 .218-.218c.1-.051.23-.055.476-.055H13.8c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C17 8.52 17 9.08 17 10.2v.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C15.48 14 14.92 14 13.8 14H13v2.2c0 .28 0 .42-.054.527a.5.5 0 0 1-.219.219C12.62 17 12.48 17 12.2 17h-.4c-.28 0-.42 0-.527-.054a.5.5 0 0 1-.218-.219C11 16.62 11 16.48 11 16.2V7.8Zm2 4.2h1.2c.28 0 .42 0 .527-.055a.5.5 0 0 0 .218-.218C15 11.62 15 11.48 15 11.2V9.8c0-.28 0-.42-.055-.527a.5.5 0 0 0-.218-.218C14.62 9 14.48 9 14.2 9H13v3Zm5.055-4.727C18 7.38 18 7.52 18 7.8v8.4c0 .28 0 .42.055.527a.5.5 0 0 0 .218.219c.107.054.247.054.527.054h.4c.28 0 .42 0 .527-.054a.5.5 0 0 0 .218-.219C20 16.62 20 16.48 20 16.2V7.8c0-.28 0-.42-.055-.527a.5.5 0 0 0-.218-.218C19.62 7 19.48 7 19.2 7h-.4c-.28 0-.42 0-.527.055a.5.5 0 0 0-.218.218Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgApi)
