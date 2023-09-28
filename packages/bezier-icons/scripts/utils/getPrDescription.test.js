const { getDescription } = require('./getPrDescription')

describe('getDescription function', () => {
  test('generates pr description from git log', () => {
    const gitLog = `M\tpackages/bezier-icons/icons/all.svg
D\tpackages/bezier-icons/icons/home.svg
A\tpackages/bezier-icons/icons/people.svg
A\tpackages/bezier-icons/icons/chevron-right.svg`
    expect(getDescription(gitLog)).toBe(`### Icon update is ready to be merged! 🎉

- 1 icon(s) modified
- 1 icon(s) deleted
- 2 icon(s) added

| Name | Status |
|--|--|
| all.svg | ✏️ |
| home.svg | 🗑️ |
| people.svg | 🆕 |
| chevron-right.svg | 🆕 |`)
  })
})
