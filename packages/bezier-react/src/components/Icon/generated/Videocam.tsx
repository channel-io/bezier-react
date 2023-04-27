import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgVideocam')
function SvgVideocam(props: SVGProps<SVGSVGElement>) {
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
        d="M12.838 5H6.162c-.527 0-.981 0-1.356.03-.395.033-.789.104-1.167.297a3 3 0 0 0-1.311 1.311c-.193.378-.264.772-.296 1.167C2 8.18 2 8.635 2 9.161v5.678c0 .527 0 .981.03 1.356.033.395.104.789.297 1.167a3 3 0 0 0 1.311 1.311c.378.193.772.264 1.167.296.375.031.83.031 1.356.031h6.678c.527 0 .981 0 1.356-.03.395-.033.789-.104 1.167-.297a3 3 0 0 0 1.311-1.311c.193-.378.264-.772.296-1.167.02-.23.026-.492.03-.783l2.867 2.868c.788.788 2.134.23 2.134-.884V6.604c0-1.114-1.346-1.672-2.134-.884l-2.868 2.868c-.003-.29-.01-.552-.029-.783-.032-.395-.103-.789-.296-1.167a3 3 0 0 0-1.311-1.311c-.378-.193-.772-.264-1.167-.296A17.9 17.9 0 0 0 12.838 5ZM17 11.414v1.172l3 3V8.414l-3 3ZM4.546 7.11c.05-.025.15-.063.422-.085C5.25 7 5.623 7 6.2 7h6.6c.577 0 .949 0 1.232.024.272.022.373.06.422.085a1 1 0 0 1 .437.437c.025.05.063.15.085.422C15 8.25 15 8.623 15 9.2v5.6c0 .577 0 .949-.024 1.232-.022.272-.06.372-.085.422a1 1 0 0 1-.437.437c-.05.025-.15.063-.422.085C13.75 17 13.377 17 12.8 17H6.2c-.577 0-.949 0-1.232-.024-.272-.022-.373-.06-.422-.085a1 1 0 0 1-.437-.437c-.025-.05-.063-.15-.085-.422C4 15.75 4 15.377 4 14.8V9.2c0-.577 0-.949.024-1.232.022-.272.06-.373.085-.422a1 1 0 0 1 .437-.437Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgVideocam)
