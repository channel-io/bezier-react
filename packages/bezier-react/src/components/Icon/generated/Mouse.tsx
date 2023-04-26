import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgMouse')
function SvgMouse(props: SVGProps<SVGSVGElement>) {
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
        d="M12.245 2h-.49c-1.55 0-2.708.278-3.686.801A5.452 5.452 0 0 0 5.801 5.07C5.278 6.047 5 7.205 5 8.755v6.49c0 1.55.278 2.708.801 3.685A5.452 5.452 0 0 0 8.07 21.2c.978.522 2.135.801 3.686.801h.49c1.55 0 2.708-.279 3.686-.801a5.452 5.452 0 0 0 2.268-2.269c.522-.977.801-2.134.801-3.685v-6.49c0-1.55-.279-2.708-.801-3.686a5.452 5.452 0 0 0-2.269-2.268C14.954 2.278 13.796 2 12.245 2Zm-.49 2h.49l.291.004c1.04.029 1.807.216 2.451.561.63.337 1.112.818 1.448 1.448.376.703.565 1.55.565 2.742v6.49l-.004.291c-.029 1.04-.216 1.807-.561 2.451a3.452 3.452 0 0 1-1.448 1.448c-.703.376-1.55.565-2.742.565h-.49l-.291-.004c-1.04-.029-1.807-.216-2.451-.561a3.452 3.452 0 0 1-1.448-1.448C7.189 17.284 7 16.437 7 15.245v-6.49l.004-.291c.029-1.04.216-1.807.561-2.451a3.453 3.453 0 0 1 1.448-1.448C9.716 4.189 10.563 4 11.755 4ZM12 6a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgMouse)
