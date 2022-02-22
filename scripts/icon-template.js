function iconTemplate({ imports, componentName, props, jsx }, { tpl }) {
  return tpl`
  ${imports}

  function ${componentName}(${props}) {
    return (
      ${jsx}
    )
  }
  
  export default ${componentName}
`
}

module.exports = iconTemplate
