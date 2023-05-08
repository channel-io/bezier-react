import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgSmsUnsubscribed')
function SvgSmsUnsubscribed(props: SVGProps<SVGSVGElement>) {
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
        d="M6 12c0 .825.676 1.5 1.5 1.5.826 0 1.501-.675 1.501-1.5s-.675-1.5-1.5-1.5S6 11.175 6 12ZM12 13.5c-.824 0-1.5-.675-1.5-1.5s.676-1.5 1.5-1.5c.826 0 1.501.675 1.501 1.5s-.675 1.5-1.5 1.5ZM15 12c0 .825.676 1.5 1.5 1.5.826 0 1.501-.675 1.501-1.5s-.675-1.5-1.5-1.5S15 11.175 15 12Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3C6.369 3 1.5 6.875 1.5 12c0 2.848 1.531 5.335 3.835 6.958-.24.634-.545 1.219-.815 1.677-.311.529-.266 1.15.034 1.606a1.44 1.44 0 0 0 1.57.609c1.053-.267 2.668-.825 4.15-1.97a12.313 12.313 0 0 0 3.89-.073A5 5 0 1 0 21.95 14.9c.356-.903.55-1.876.55-2.9 0-5.125-4.869-9-10.5-9Zm8.17 10.92A5.8 5.8 0 0 0 20.5 12c0-3.712-3.638-7-8.5-7s-8.5 3.288-8.5 7c0 2.283 1.343 4.375 3.536 5.679l.655.39-.202.735a10.79 10.79 0 0 1-.65 1.722c.799-.31 1.696-.775 2.503-1.465l.361-.309.467.085a10.403 10.403 0 0 0 3.532.024 5 5 0 0 1 6.467-4.942Zm-2.755 7.48c.391.186.823.3 1.285.3 1.654 0 3-1.346 3-3 0-.462-.114-.894-.3-1.285L17.414 21.4ZM19.985 16a2.954 2.954 0 0 0-1.285-.3c-1.654 0-3 1.345-3 3 0 .461.113.893.301 1.284l3.984-3.984Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgSmsUnsubscribed)
