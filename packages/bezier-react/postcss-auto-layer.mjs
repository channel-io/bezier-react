import { minimatch } from 'minimatch'

/**
 * @typedef {Object} Options
 * @property {string} name The name of the layer.
 * @property {string} path The path to the file to wrap in a layer.
 */

/**
 * PostCSS plugin to automatically wrap the root node in a CSS layer at rule.
 * @type {import('postcss').PluginCreator<Options>}
 */
const postcssAutoLayer = (opts = {}) => ({
  postcssPlugin: 'postcss-auto-layer',
  Once(root, { result, AtRule }) {
    const filePath = result.opts.from
    if (filePath && minimatch(filePath, opts.path)) {
      const layer = new AtRule({ name: 'layer', params: opts.name })
      root.nodes.forEach((node) => {
        layer.append(node.clone())
      })
      root.removeAll().append(layer)
    }
  },
})

postcssAutoLayer.postcss = true

export default postcssAutoLayer
