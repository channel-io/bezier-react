import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgChannelBtnFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M12 1C5.959 1 1.054 5.872 1 11.9v.2C1.054 18.128 5.959 23 12 23c6.075 0 11-4.925 11-11S18.075 1 12 1Zm5.804 15.212a1.642 1.642 0 0 1 .094-1.26 6.56 6.56 0 0 0 .65-3.785c-.368-2.961-2.756-5.355-5.718-5.716a6.604 6.604 0 0 0-7.38 7.378c.362 2.962 2.755 5.35 5.716 5.719a6.565 6.565 0 0 0 3.786-.65 1.641 1.641 0 0 1 1.26-.094l1.344.448a.55.55 0 0 0 .696-.695l-.448-1.345Zm-8.832-4.267c0 1.131.267 1.594.907 1.594s.908-.463.908-1.594c0-1.132-.267-1.595-.908-1.595-.64 0-.907.463-.907 1.595Zm4.242 0c0 1.132.267 1.595.908 1.595.64 0 .907-.463.907-1.595s-.267-1.595-.907-1.595c-.641 0-.908.463-.908 1.595Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgChannelBtnFilled)
