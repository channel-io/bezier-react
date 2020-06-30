import React from 'react'

function SvgFunnel(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20 2a1 1 0 011 1v2.172c0 .53-.21 1.039-.586 1.414l-4.828 4.828A2 2 0 0015 12.828v6.554a.998.998 0 01-.553.894l-4 2A1 1 0 019 21.382v-8.554c0-.53-.21-1.039-.586-1.414L3.586 6.586A1.998 1.998 0 013 5.172V3a1 1 0 011-1h16zm-7 11h-2v6.763l2-1V13zm6-9H5v1.172L9.828 10c.297.296.542.634.73 1h2.884c.154-.3.347-.58.574-.835l.156-.165L19 5.172V4z"
      />
    </svg>
  )
}

export default SvgFunnel
