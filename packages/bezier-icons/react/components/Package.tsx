import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgPackage(props: SVGProps<SVGSVGElement>) {
  return (
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
        d="M13 2.5774C12.3812 2.22013 11.6188 2.22013 11 2.5774L4 6.61885C3.3812 6.97611 3 7.63637 3 8.3509V16.4338C3 17.1483 3.3812 17.8086 4 18.1659L11 22.2073C11.6188 22.5646 12.3812 22.5646 13 22.2073L20 18.1659C20.6188 17.8086 21 17.1483 21 16.4338V8.3509C21 7.63637 20.6188 6.97611 20 6.61885L13 2.5774ZM9.92926 5.37741L12 4.18187L18.3042 7.82161L16.1982 9.03256L9.92926 5.37741ZM7.94029 6.52575L5.6958 7.8216L12 11.4465L14.2491 10.1533L7.94029 6.52575ZM4.88951 9.66504V16.4976L11.0002 20.0256V13.1787L4.88951 9.66504ZM13.0002 20.0254L19.1105 16.4976V9.66505L13.0002 13.1785V20.0254Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgPackage)
