import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgKakao')
function SvgKakao(props: SVGProps<SVGSVGElement>) {
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
        d="M6.05 13.294c.11.104.256.16.407.157a.566.566 0 0 0 .566-.553V9.445h.918a.566.566 0 0 0 0-1.132H4.966a.566.566 0 1 0 0 1.132h.906v3.453c.005.15.069.293.178.396Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.263 13.397a.484.484 0 0 0 .282.054v-.006a.962.962 0 0 0 .37-.082c.14-.075.315-.277.14-.824l-1.39-3.654a.81.81 0 0 0-1.548 0l-1.39 3.654c-.176.547-.025.748.138.824.117.053.243.08.372.082a.472.472 0 0 0 .478-.258l.289-.755h1.792l.264.761a.484.484 0 0 0 .203.204ZM9.89 9.765l.578 1.648H9.312l.579-1.648Z"
      />
      <path
        fill="currentColor"
        d="M12.776 13.335a.536.536 0 0 0 .209.034l1.887-.006a.535.535 0 1 0 0-1.063h-1.258V8.891a.591.591 0 0 0-1.182 0v3.95a.535.535 0 0 0 .344.494ZM15.802 13.277c.108.11.256.172.41.174v-.006c.153-.001.3-.062.408-.17a.63.63 0 0 0 .17-.415v-1.258l.201-.201 1.365 1.805a.546.546 0 0 0 .46.226.54.54 0 0 0 .352-.113.552.552 0 0 0 .15-.17.627.627 0 0 0 .076-.214.56.56 0 0 0-.113-.427l-1.428-1.887 1.32-1.327a.44.44 0 0 0 .133-.352.56.56 0 0 0-.176-.365.547.547 0 0 0-.396-.176.452.452 0 0 0-.321.132l-1.623 1.616V8.891a.579.579 0 0 0-1.157 0v3.975c0 .154.06.302.169.412Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.25 22.29c.192.11.409.17.63.17.114-.001.228-.015.34-.04.26-.06.84-.33 4.26-2.73.52.08 1.01.08 1.52.08 6.07 0 11-3.99 11-8.88C23 6 18.07 2 12 2S1 6 1 10.89a8.43 8.43 0 0 0 4.5 7.19 30.545 30.545 0 0 0-.82 3 1.22 1.22 0 0 0 .57 1.21ZM3 10.89C3 7.09 7 4 12 4s9.03 3.1 9.03 6.89c0 3.79-4 6.88-9 6.88a12.776 12.776 0 0 1-1.64-.11L10 17.6l-.35.23-2.49 1.72c.085-.305.182-.64.285-.998l.205-.712.23-.8-.75-.37C4.54 15.39 3 13.23 3 10.89Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgKakao)
