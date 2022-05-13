const { merge } = require('lodash')
const { defineConfig } = require('vite')

const defaultConfig = defineConfig({
  build: {
    lib: {
      entry: 'index.ts',
      formats: [
        'es',
        'cjs',
      ],
    },
    rollupOptions: {
      external: [
        'node_modules/**',
        'react',
        'react-dom',
      ],
    },
  },
})

/**
 * @param {Parameters<typeof defineConfig>[0]} config
 */
module.exports = (config) => defineConfig(merge(defaultConfig, config))
