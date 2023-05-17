module.exports = {
  plugins: [
    /**
     * Set the `fill` attribute to `currentColor` for all `path` elements.
     * This allows us to dynamically change the color of the SVG icon.
     * @see https://gomakethings.com/currentcolor-and-svgs/#dynamic-svg-colors
     */
    {
      name: 'convertColors',
      params: {
        currentColor: true,
      },
    },
  ],
}
