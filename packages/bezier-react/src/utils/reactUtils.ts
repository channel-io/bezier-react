import React from 'react'

export const getReactVersion = () => {
  const [major, minor, patch] = React.version.split('.').map(Number)
  return { major, minor, patch }
}
