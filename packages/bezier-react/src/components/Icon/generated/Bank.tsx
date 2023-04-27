import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgBank')
function SvgBank(props: SVGProps<SVGSVGElement>) {
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
        d="M21 6.65a1 1 0 0 0-.594-.914l-8-3.555a1 1 0 0 0-.812 0l-8 3.555A1 1 0 0 0 3 6.65V8a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6.65ZM5.673 7 12 4.188 18.326 7H5.673Z"
      />
      <path
        fill="currentColor"
        d="M5 11a1 1 0 0 1 2 0v6a1 1 0 1 1-2 0v-6ZM19 11a1 1 0 0 0-2 0v6a1 1 0 1 0 2 0v-6ZM4 19a1 1 0 0 0 0 2h16a1 1 0 1 0 0-2H4ZM12.325 13.296l.743.296c.736.296 1.175.791 1.175 1.631 0 .818-.573 1.546-1.58 1.779V18H11.33v-.983a3.281 3.281 0 0 1-1.58-.786l.807-.984c.424.36.976.608 1.448.608.528 0 .775-.2.775-.52s-.285-.44-.738-.63l-.101-.042-.76-.32c-.624-.247-1.207-.767-1.207-1.63 0-.77.535-1.418 1.356-1.676V10h1.333v.966a2.72 2.72 0 0 1 1.405.731l-.712.896c-.392-.296-.76-.456-1.223-.456-.44 0-.712.176-.712.496 0 .31.336.441.819.63l.085.033Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgBank)
