module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        bugfixes: true,
        /**
         * NOTE: Pinned to preserve the pre-migration output. browserslist resolution depends on
         * where caniuse-lite copies land, so a different install layout changes the downlevel
         * result. CSS targets live in `.browserslistrc` — update both when changing support.
         */
        targets: {
          android: '121',
          chrome: '77',
          edge: '105',
          firefox: '121',
          ios: '15.4',
          opera: '91',
          safari: '15.4',
          samsung: '20',
        },
      },
    ],
    ['@babel/preset-react', { runtime: 'automatic' }],
    ['@babel/preset-typescript', { isTSX: true, allExtensions: true }],
  ],
}
