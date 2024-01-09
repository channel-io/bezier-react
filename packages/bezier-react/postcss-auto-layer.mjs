import { minimatch } from 'minimatch'

/**
 * @type {import('postcss').PluginCreator<{ name: string, path: string }>}
 */
const postcssAutoLayer = (opts = {}) => ({
  postcssPlugin: 'postcss-auto-layer',
  Once(root, { result, AtRule }) {
    const filePath = result.opts.from
    if (filePath && minimatch(filePath, opts.path)) {
      const layer = new AtRule({ name: 'layer', params: opts.name })
      root.nodes.forEach(node => { layer.append(node.clone()) })
      root.removeAll().append(layer)
    }
  },
})

postcssAutoLayer.postcss = true

export default postcssAutoLayer
