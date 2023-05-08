import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgChannelBtnSmile')
function SvgChannelBtnSmile(props: SVGProps<SVGSVGElement>) {
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
        d="M1 11.9C1.054 5.872 5.959 1 12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11C5.959 23 1.054 18.128 1 12.1v-.2Zm10.107 7.195a7.105 7.105 0 0 0 4.113-.715l1.458.626a1.77 1.77 0 0 0 1.952-.376 1.766 1.766 0 0 0 .375-1.952l-.625-1.46c.644-1.269.89-2.688.715-4.111-.396-3.21-2.998-5.812-6.201-6.203a7.14 7.14 0 0 0-5.95 2.04 7.139 7.139 0 0 0-2.04 5.95c.39 3.202 2.994 5.805 6.203 6.201Zm3.513-2.194a5.517 5.517 0 0 1-3.318.617c-2.486-.307-4.519-2.339-4.82-4.816a5.55 5.55 0 0 1 1.586-4.635 5.552 5.552 0 0 1 4.634-1.586c2.478.302 4.51 2.335 4.816 4.82a5.533 5.533 0 0 1-.618 3.32c-.181.335-.19.74-.036 1.093l.681 1.59a.178.178 0 0 1-.039.202.181.181 0 0 1-.202.04l-1.593-.684a1.262 1.262 0 0 0-1.091.039Zm-4.538-5.89c-.61 0-.863-.443-.863-1.394 0-.95.254-1.394.863-1.394.608 0 .861.443.861 1.394 0 .951-.253 1.394-.861 1.394Zm2.975-1.394c0 .951.253 1.394.862 1.394s.862-.443.862-1.394c0-.951-.253-1.394-.862-1.394-.61 0-.862.443-.862 1.394Zm.455 1.787h-3.024a.277.277 0 0 0-.27.329 1.813 1.813 0 0 0 3.565 0 .278.278 0 0 0-.271-.329Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgChannelBtnSmile)
