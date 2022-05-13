const { mergeConfig } = require('./utils')
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

module.exports = mergeConfig(defaultConfig)
