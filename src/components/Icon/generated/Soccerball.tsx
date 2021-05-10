import React from 'react'

function SvgSoccerball(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="currentColor">
        <path
          fill="currentColor"
          d="M15.804 13.236L12 15.998l-3.804-2.764 1.453-4.472h4.702l1.453 4.473z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 22a9.962 9.962 0 01-6.649-2.531 10.052 10.052 0 01-1.694-1.955A9.945 9.945 0 012 12a9.92 9.92 0 01.794-3.91 10.027 10.027 0 015.743-5.474A9.946 9.946 0 0112 2a9.942 9.942 0 013.462.615A10.004 10.004 0 0122 12c0 5.523-4.477 10-10 10zm-5.706-8.027l-2.29-2.232c.047-1.47.49-2.839 1.226-4.005l3.243-.471 1.481-3.001A8.012 8.012 0 0112 4c.707 0 1.393.091 2.046.263l1.48 3.002 3.245.47a7.958 7.958 0 011.225 4.006l-2.29 2.232.523 3.048a8.017 8.017 0 01-3.535 2.514L12 18.119l-2.694 1.416c-1.4-.5-2.62-1.38-3.535-2.515l.523-3.047z"
        />
      </g>
    </svg>
  )
}

export default SvgSoccerball
