import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgSendForwardFailed(props: SVGProps<SVGSVGElement>) {
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
        d="M12 18C12 18.025 12.0036 18.0491 12.0071 18.0733L12.0071 18.0734C12.0101 18.0937 12.0131 18.114 12.014 18.135L10.617 13.178L18.261 8.745L15.691 13.195C13.569 13.773 12 15.694 12 18ZM5.34802 7H17.283L9.62102 11.443L5.34802 7ZM18.048 13.114L21.866 6.5C21.969 6.321 22.006 6.118 21.989 5.919C21.987 5.89 21.983 5.861 21.978 5.831C21.958 5.717 21.926 5.604 21.866 5.5V5.499C21.866 5.499 21.866 5.498 21.865 5.498C21.8645 5.497 21.8638 5.49625 21.863 5.4955C21.8623 5.49475 21.8615 5.494 21.861 5.493C21.801 5.392 21.721 5.308 21.632 5.234L21.6215 5.22574L21.6215 5.22572C21.6022 5.21052 21.5832 5.19554 21.562 5.182C21.469 5.117 21.369 5.064 21.26 5.034C21.2558 5.03281 21.2517 5.03268 21.2477 5.03256C21.245 5.03248 21.2424 5.0324 21.24 5.032C21.162 5.013 21.082 5 21 5H3.00002C2.59902 5 2.23702 5.239 2.08002 5.608C1.92302 5.978 2.00102 6.404 2.27902 6.693L8.54902 13.215L11.002 21.921C11.111 22.308 11.442 22.592 11.841 22.642C11.882 22.647 11.924 22.65 11.965 22.65C12.319 22.65 12.651 22.461 12.831 22.15L13.3 21.337C14.215 22.351 15.526 23 17 23C19.761 23 22 20.762 22 18C22 15.599 20.305 13.596 18.048 13.114ZM17.0002 21.0001C16.5382 21.0001 16.1062 20.8861 15.7152 20.6991L19.6992 16.7151C19.8862 17.1061 20.0002 17.5381 20.0002 18.0001C20.0002 19.6541 18.6542 21.0001 17.0002 21.0001ZM18.2852 15.3011C17.8942 15.1131 17.4612 15.0001 17.0002 15.0001C15.3462 15.0001 14.0002 16.3461 14.0002 18.0001C14.0002 18.4621 14.1132 18.8941 14.3012 19.2851L18.2852 15.3011Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgSendForwardFailed)
