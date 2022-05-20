import * as React from 'react'
import { SVGProps } from 'react'
import createBezierIcon from '../createBezierIcon'

function SvgChannelBtnSmileFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M12 1C5.959 1 1.054 5.872 1 11.9v.2C1.054 18.128 5.959 23 12 23c6.075 0 11-4.925 11-11S18.075 1 12 1Zm5.898 13.952a1.642 1.642 0 0 0-.094 1.26l.448 1.345a.55.55 0 0 1-.696.695l-1.344-.448a1.641 1.641 0 0 0-1.26.094 6.565 6.565 0 0 1-3.786.65c-2.96-.369-5.354-2.757-5.715-5.718a6.604 6.604 0 0 1 7.379-7.38c2.962.362 5.35 2.756 5.718 5.717a6.56 6.56 0 0 1-.65 3.785Zm-8.019-3.888c-.64 0-.907-.463-.907-1.594 0-1.132.267-1.595.907-1.595s.908.463.908 1.595c0 1.131-.267 1.594-.908 1.594Zm4.243.001c-.641 0-.908-.463-.908-1.595s.267-1.595.908-1.595c.64 0 .907.463.907 1.595s-.267 1.595-.907 1.595Zm-3.692.316h3.14c.18 0 .313.165.281.342a1.883 1.883 0 0 1-3.702 0 .288.288 0 0 1 .28-.342Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgChannelBtnSmileFilled)
