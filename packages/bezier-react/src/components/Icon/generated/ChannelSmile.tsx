import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgChannelSmile')
function SvgChannelSmile(props: SVGProps<SVGSVGElement>) {
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
        d="M6.349 6.337A7.938 7.938 0 0 1 11.998 4c.445 0 .895.036 1.347.11a7.944 7.944 0 0 1 6.489 6.244c.377 1.874.11 3.74-.774 5.394-.343.644-.411 1.36-.193 2.015l.552 1.655-1.656-.55c-.658-.22-1.372-.15-2.015.192a7.966 7.966 0 0 1-4.926.855c-3.413-.493-6.174-3.202-6.716-6.588-.416-2.604.402-5.152 2.243-6.99Zm4.187 15.557c.489.071.978.106 1.464.106a9.92 9.92 0 0 0 4.69-1.176c.089-.047.266-.118.44-.06l2.605.868c.54.18 1.13.042 1.535-.362.405-.405.543-.993.363-1.535l-.868-2.604c-.06-.176.012-.353.06-.442 1.104-2.068 1.44-4.395.97-6.73-.81-4.024-4.078-7.168-8.131-7.824-3.243-.525-6.427.49-8.728 2.787-2.301 2.296-3.323 5.475-2.804 8.721.678 4.241 4.134 7.634 8.404 8.251ZM9.923 9.077c0 1.147-.303 2.077-1.211 2.077-.91 0-1.212-.93-1.212-2.077C7.5 7.93 7.803 7 8.712 7c.908 0 1.211.93 1.211 2.077ZM12 13.923c-1.4 0-2.12-1.132-2.345-1.93-.074-.267.146-.493.422-.493h3.846c.276 0 .496.226.422.492-.225.8-.945 1.931-2.345 1.931Zm4.5-4.846c0 1.147-.303 2.077-1.211 2.077-.91 0-1.212-.93-1.212-2.077C14.077 7.93 14.38 7 15.289 7c.908 0 1.211.93 1.211 2.077Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgChannelSmile)
