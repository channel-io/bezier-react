import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgVideocamOff')
function SvgVideocamOff(props: SVGProps<SVGSVGElement>) {
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
        d="M6.207 1.793a1 1 0 0 0-1.414 1.414L19.866 18.28c.788.788 2.134.23 2.134-.884V6.604c0-1.114-1.346-1.672-2.134-.884l-2.868 2.867c-.003-.29-.01-.551-.029-.782-.032-.395-.103-.789-.296-1.167a3 3 0 0 0-1.311-1.311c-.378-.193-.772-.264-1.167-.296A17.9 17.9 0 0 0 12.839 5H9.414L6.207 1.793ZM11.414 7 15 10.586V9.2c0-.577 0-.949-.024-1.232-.022-.272-.06-.373-.085-.422a1 1 0 0 0-.437-.437c-.05-.025-.15-.063-.422-.085C13.75 7 13.377 7 12.8 7h-1.386ZM17 12.586l3 3V8.414l-3 3v1.172Z"
      />
      <path
        fill="currentColor"
        d="M4.805 5.03c.12-.01.247-.016.383-.02L7.178 7H6.2c-.577 0-.949 0-1.232.024-.272.022-.373.06-.422.085a1 1 0 0 0-.437.437c-.025.05-.063.15-.085.422C4 8.25 4 8.623 4 9.2v5.6c0 .577 0 .949.024 1.232.022.272.06.372.085.422a1 1 0 0 0 .437.437c.05.025.15.063.422.085C5.25 17 5.623 17 6.2 17h6.6c.577 0 .949 0 1.232-.024.272-.022.373-.06.422-.085a1 1 0 0 0 .437-.437c.025-.05.063-.15.085-.422.023-.28.024-.646.024-1.21l1.896 1.896a2.585 2.585 0 0 1-.223.644 3 3 0 0 1-1.311 1.311c-.378.193-.772.264-1.167.296-.375.031-.83.031-1.356.031H6.16c-.527 0-.981 0-1.356-.03-.395-.033-.789-.104-1.167-.297a3 3 0 0 1-1.311-1.311c-.193-.378-.264-.772-.296-1.167A17.9 17.9 0 0 1 2 14.839V9.16c0-.527 0-.981.03-1.356.033-.395.104-.789.297-1.167a3 3 0 0 1 1.311-1.311c.378-.193.772-.264 1.167-.296Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgVideocamOff)
