module.exports = {
  "icon": true,
  "typescript": true,
  "jsxRuntime": "automatic",
  "prettier": true,
  "prettierConfig": {
    "semi": false,
    "endOfLine": "lf",
    "singleQuote": true
  },
  "jsx": {
    /**
     * Set the `fill` attribute to `currentColor` for all `path` elements.
     * This allows us to dynamically change the color of the SVG icon.
     * @see https://gomakethings.com/currentcolor-and-svgs/#dynamic-svg-colors
     */
    babelConfig: {
      plugins: [
        [
          '@svgr/babel-plugin-remove-jsx-attribute',
          {
            elements: ['path'],
            attributes: ['fill'],
          },
        ],
        [
          '@svgr/babel-plugin-add-jsx-attribute',
          {
            elements: ['path'],
            attributes: [
              {
                name: 'fill',
                value: 'currentColor',
                position: 'start',
              }
            ],
          }
        ]
      ],
    },
  }
}
