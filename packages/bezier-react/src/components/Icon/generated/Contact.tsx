import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgContact')
function SvgContact(props: SVGProps<SVGSVGElement>) {
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
        d="M9.4 4h5.2c1.153 0 1.898.002 2.464.048.544.044.745.12.844.17a2 2 0 0 1 .874.874c.05.099.126.3.17.844.046.566.048 1.31.048 2.464v7.2c0 1.153-.002 1.898-.048 2.464-.044.544-.12.745-.17.844a2 2 0 0 1-.874.874c-.099.05-.3.126-.844.17-.566.046-1.31.048-2.464.048H9.4c-1.153 0-1.898-.002-2.464-.048-.544-.044-.745-.12-.844-.17a2 2 0 0 1-.874-.874c-.05-.099-.126-.3-.17-.844C5.002 17.498 5 16.754 5 15.6V8.4c0-1.153.002-1.898.048-2.464.044-.544.12-.745.17-.844a2 2 0 0 1 .874-.874c.099-.05.3-.126.844-.17C7.502 4.002 8.246 4 9.4 4ZM3.005 16.994c.019 1.354.097 2.166.431 2.822a4 4 0 0 0 1.748 1.748C6.04 22 7.16 22 9.4 22h5.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C21 18.96 21 17.84 21 15.6V8.4c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C17.96 2 16.84 2 14.6 2H9.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748c-.334.656-.412 1.468-.43 2.822a1.144 1.144 0 0 0-.389.07 1 1 0 0 0-.54.541C2 7.801 2 8.034 2 8.5s0 .699.076.883a1 1 0 0 0 .541.54c.102.043.22.062.383.07v4.014c-.164.008-.28.027-.383.07a1 1 0 0 0-.54.54C2 14.801 2 15.034 2 15.5s0 .699.076.883a1 1 0 0 0 .541.54c.103.044.222.062.389.07ZM14 9.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM7.786 17h8.428c.161 0 .296-.135.286-.294a4.509 4.509 0 0 0-9 0c-.01.159.125.294.286.294Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgContact)
