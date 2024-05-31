/* eslint-disable no-undef */
const { getDescription } = require('./getPrDescription')

describe('getDescription function', () => {
  test('generates pr description from git log', () => {
    const gitLog = `M\tpackages/bezier-icons/icons/all.svg
D\tpackages/bezier-icons/icons/home.svg
A\tpackages/bezier-icons/icons/people.svg
A\tpackages/bezier-icons/icons/chevron-right.svg
R100\tpackages/bezier-icons/icons/paused.svg\tpackages/bezier-icons/icons/paused-fill.svg`
    expect(getDescription(gitLog))
      .toBe(`### Icon update is ready to be merged! 🎉

- 1 icon(s) modified
- 1 icon(s) deleted
- 2 icon(s) added
- 1 icon(s) renamed

| Name | Status |
|--|--|
| all.svg | ✏️ |
| home.svg | 🗑️ |
| people.svg | 🆕 |
| chevron-right.svg | 🆕 |
| paused.svg | ✍️ |`)
  })
})
