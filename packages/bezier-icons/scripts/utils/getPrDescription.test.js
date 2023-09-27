const { getDescription } = require('./getPrDescription.js/index.js')

describe('getDescription function', () => {
  test('generates pr description from git log', () => {
    const gitLog = `M\tpackages/bezier-icons/icons/all.svg
D\tpackages/bezier-icons/icons/home.svg
A\tpackages/bezier-icons/icons/people.svg
A\tpackages/bezier-icons/icons/chevron-right.svg`
    expect(getDescription(gitLog)).toBe(`### Icon update is ready to be merged! 🎉

1 icon(s) Modified 🖊️
- all.svg

1 icon(s) Deleted 🗑️
- home.svg

2 icon(s) Added 🎨
- people.svg
- chevron-right.svg`)
  })
})
