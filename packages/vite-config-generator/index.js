const { defineConfig } = require('vite')
const { readPackageUpSync }= require('read-pkg-up')

/**
 * @param {UserConfigExport} config
 * @returns UserConfigExport
 */
module.exports = (config) => {
  const { pacakgeJson } = readPackageUpSync()
  const { build: buildConfig, ...restConfig } = config ?? {}
  const { lib: libConfig, rollupOptions: rollupOptionsConfig, ...restBuildConfig } = buildConfig ?? {}

  return defineConfig({
    ...restConfig,
    build: {
      ...restBuildConfig,
      lib: {
        entry: pacakgeJson.main,
        formats: [
          'es',
          'cjs',
        ],
        ...libConfig,
      },
      rollupOptions: {
        external: [
          'node_modules/**',
          'react',
          'react-dom',
        ],
        ...rollupOptionsConfig,
      },
    },
  })
}
