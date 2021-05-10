import React from 'react'

function SvgFunnel(props: React.SVGProps<SVGSVGElement>) {
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
        d="M20 2a1 1 0 011 1v2.172a2 2 0 01-.586 1.414l-4.828 4.828A2 2 0 0015 12.828v6.554a1 1 0 01-.553.894l-4 2A1 1 0 019 21.382v-8.554a2 2 0 00-.586-1.414L3.586 6.586A2 2 0 013 5.172V3a1 1 0 011-1h16zm-1 2H5v1.172L9.828 10c.297.296.542.634.73 1h2.884c.154-.3.347-.58.574-.835l.156-.165L19 5.172V4zm-6 9h-2v6.763l2-1V13z"
      />
    </svg>
  )
}

export default SvgFunnel
