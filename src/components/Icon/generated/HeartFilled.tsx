import React from 'react'

function SvgHeartFilled(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.335 5.467c-.406-.406-.939-.731-1.516-.992C16.426 3.393 13.296 4.18 12 6.633c-1.297-2.452-4.427-3.24-6.819-2.158-.577.26-1.11.586-1.516.992-2.153 2.153-2.205 5.428-.233 7.798 2.123 2.55 5.72 5.906 7.903 7.878.38.344.95.344 1.33 0 2.184-1.972 5.78-5.327 7.903-7.878 1.971-2.37 1.92-5.645-.233-7.798"
      />
    </svg>
  )
}

export default SvgHeartFilled
