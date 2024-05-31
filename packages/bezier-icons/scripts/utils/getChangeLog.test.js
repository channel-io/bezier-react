/* eslint-disable no-undef */
const { getChangeLog } = require('./getChangeLog')

describe('getChangeLog function', () => {
  test('returns changelog from git log', () => {
    const gitLog = `M\tpackages/bezier-icons/icons/all.svg
D\tpackages/bezier-icons/icons/home.svg
A\tpackages/bezier-icons/icons/people.svg
A\tpackages/bezier-icons/icons/chevron-right.svg
R100\tpackages/bezier-icons/icons/paused.svg\tpackages/bezier-icons/icons/paused-fill.svg`

    expect(getChangeLog(gitLog)).toBe(
      `---
"@channel.io/bezier-icons": minor
---

Update icons

Modified

- all.svg

Deleted

- home.svg

Added

- people.svg
- chevron-right.svg

Renamed

- paused.svg -> paused-fill.svg`
    )
  })
})
