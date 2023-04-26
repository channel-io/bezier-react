import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgKakaoFilled')
function SvgKakaoFilled(props: SVGProps<SVGSVGElement>) {
  const Svg = (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="currentColor" d="m9.676 9.672.633 1.802H9.044l.632-1.802Z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C5.93 2 1 5.864 1 10.676c0 3.094 2.063 5.81 5.156 7.356l-.214.748c-.326 1.138-.875 3.05-.906 3.24a.289.289 0 0 0 .103.261.337.337 0 0 0 .261 0c.344-.048 4.015-2.626 4.647-3.073.647.092 1.3.138 1.953.138 6.078 0 11-3.878 11-8.67S18.07 2 12 2ZM5.478 13.53c.12.114.28.175.445.171a.619.619 0 0 0 .618-.605V9.322h1.004a.619.619 0 1 0 0-1.238H4.293a.619.619 0 0 0 0 1.238h.99v3.774c.006.165.076.32.195.434Zm5.698.113a.53.53 0 0 0 .308.058v-.007c.14-.002.278-.033.406-.089.151-.082.344-.303.151-.9l-1.52-3.995a.887.887 0 0 0-1.69 0l-1.52 3.994c-.192.598-.027.819.152.901a.998.998 0 0 0 .405.09.516.516 0 0 0 .523-.283l.316-.825h1.96l.288.832a.53.53 0 0 0 .22.223Zm1.654-.069c.073.028.15.04.229.038l2.062-.007a.583.583 0 1 0 0-1.162h-1.375V8.717a.646.646 0 0 0-1.292 0v4.317a.584.584 0 0 0 .376.54Zm3.308-.062a.64.64 0 0 0 .448.19v-.008a.64.64 0 0 0 .447-.185.688.688 0 0 0 .185-.454V11.68l.22-.22 1.492 1.973a.6.6 0 0 0 .502.248.591.591 0 0 0 .385-.124.605.605 0 0 0 .165-.186.687.687 0 0 0 .082-.234.612.612 0 0 0-.123-.467l-1.561-2.063 1.444-1.45a.482.482 0 0 0 .144-.385.613.613 0 0 0-.192-.399.598.598 0 0 0-.433-.192.495.495 0 0 0-.351.144l-1.774 1.767V8.717a.633.633 0 0 0-1.265 0v4.345c0 .168.067.33.185.45Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgKakaoFilled)
