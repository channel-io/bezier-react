const { merge } = require('lodash')
const { defineConfig } = require('vite')

/**
 * @param {Parameters<typeof defineConfig>[0]} destination
 */
const mergeConfig = (destination) => {
  /**
   * @param {Parameters<typeof defineConfig>[0]} source
   */
  return (source) => defineConfig(merge(destination, source))
}

 module.exports = {
   mergeConfig,
 }
