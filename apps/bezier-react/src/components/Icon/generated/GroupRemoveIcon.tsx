import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgGroupRemoveIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M9 4c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2Zm0 6c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4Zm8.934 9a8.928 8.928 0 0 0-1.8-4.469c.045-.003.09-.009.136-.014.064-.009.128-.017.19-.017 2.66 0 4.933 1.935 5.408 4.5h-3.934Zm-2.994 0H2.07A7.015 7.015 0 0 1 9 13a7.014 7.014 0 0 1 6.93 6h-.99Zm1.52-6.5c-.44 0-.88.042-1.35.127l-.774.141A8.956 8.956 0 0 0 9 11C4.27 11 .324 14.694.018 19.412a1.49 1.49 0 0 0 .402 1.11c.285.304.687.478 1.103.478h20.914c.42 0 .825-.177 1.11-.487.28-.303.421-.71.388-1.115-.308-3.868-3.59-6.898-7.476-6.898Zm4.267-1.773a.933.933 0 0 1-1.32 0L17.5 8.82l-1.907 1.907a.933.933 0 1 1-1.32-1.32L16.18 7.5l-1.907-1.907a.933.933 0 1 1 1.32-1.32L17.5 6.18l1.907-1.907a.933.933 0 1 1 1.32 1.32L18.82 7.5l1.907 1.907a.933.933 0 0 1 0 1.32Z"
      />
    </svg>
  )
}

export default createIcon(SvgGroupRemoveIcon)
