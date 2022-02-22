function iconTemplate({ imports, componentName, props, jsx }, { tpl }) {
  return tpl`
  ${imports}
  import createIcon from 'Components/Icon/createIcon'

  function ${componentName}(${props}) {
    return (
      ${jsx}
    )
  }
  
  export default createIcon(${componentName})
`
}

module.exports = iconTemplate
