import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgGoogleIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M12 10.198v3.85h5.4a4.628 4.628 0 0 1-1.998 3.04v.002c-.896.608-2.052.953-3.399.953-2.608 0-4.82-1.76-5.614-4.127h-.004a5.99 5.99 0 0 1 0-3.828c.79-2.37 3.006-4.13 5.615-4.13a5.434 5.434 0 0 1 3.836 1.499l2.855-2.855A9.61 9.61 0 0 0 12 2.001a9.998 9.998 0 0 0-8.936 5.511 10.008 10.008 0 0 0 0 8.98A10.001 10.001 0 0 0 12 22c2.697 0 4.971-.886 6.628-2.414l-.002-.002c1.891-1.741 2.978-4.313 2.978-7.354 0-.68-.055-1.363-.172-2.032H12Z"
      />
    </svg>
  )
}

export default createIcon(SvgGoogleIcon)
