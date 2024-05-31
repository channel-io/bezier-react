const getIconName = (path) => path.split('/').at(-1)

const getRenamedIconMap = (gitLog) =>
  gitLog
    .trim()
    .split('\n')
    .map((line) => line.split('\t'))
    .filter((line) => line[1].endsWith('.svg'))
    .reduce((acc, cur) => {
      const [key, from, to] = cur

      if (key !== 'R100') {
        return acc
      }

      const iconName = getIconName(from)
      const renamedIconName = getIconName(to)

      if (!iconName) {
        return acc
      }

      acc[iconName] = renamedIconName

      return acc
    }, {})

module.exports = {
  getRenamedIconMap,
}
