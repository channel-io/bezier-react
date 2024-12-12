module.exports = {
  presets: [
    ['@babel/preset-env', { bugfixes: true }],
    ['@babel/preset-react', { runtime: 'automatic' }],
    ['@babel/preset-typescript', { isTSX: true, allExtensions: true }],
  ],
}
