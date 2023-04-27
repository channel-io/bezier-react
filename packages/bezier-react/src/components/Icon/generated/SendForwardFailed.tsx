import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgSendForwardFailed')
function SvgSendForwardFailed(props: SVGProps<SVGSVGElement>) {
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
        d="M12 18c0 .025.004.05.007.073.003.02.006.041.007.062l-1.397-4.957 7.644-4.433-2.57 4.45C13.569 13.773 12 15.694 12 18ZM5.348 7h11.935l-7.662 4.443L5.348 7Zm12.7 6.114L21.866 6.5a.99.99 0 0 0 .112-.669.998.998 0 0 0-.112-.331v-.001l-.001-.001a.009.009 0 0 0-.002-.003l-.002-.002a1.013 1.013 0 0 0-.229-.259l-.01-.008c-.02-.015-.039-.03-.06-.044a.987.987 0 0 0-.314-.15h-.008A1.013 1.013 0 0 0 21 5H3a1 1 0 0 0-.721 1.693l6.27 6.522 2.453 8.706a1 1 0 0 0 1.829.229l.469-.813A4.968 4.968 0 0 0 17 23a5 5 0 0 0 5-5 5 5 0 0 0-3.952-4.886ZM17 21c-.462 0-.894-.114-1.285-.3l3.984-3.985c.187.391.301.823.301 1.285 0 1.654-1.346 3-3 3Zm1.285-5.699a2.954 2.954 0 0 0-1.285-.3c-1.654 0-3 1.345-3 3 0 .461.113.893.301 1.284l3.984-3.984Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgSendForwardFailed)
