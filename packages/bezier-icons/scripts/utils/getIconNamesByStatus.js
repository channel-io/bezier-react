const getIconName = (path) => path.split('/').at(-1)

const getIconNamesByStatus = (gitLog) =>
  gitLog
    .trim()
    .split('\n')
    .map((line) => line.split('\t'))
    .filter((line) => line[1].endsWith('.svg'))
    .reduce((acc, cur) => {
      const [key, file] = cur
      const icon = getIconName(file)

      if (!icon) {
        return acc
      }

      if (!acc[key]) {
        acc[key] = [icon]
      } else {
        acc[key].push(icon)
      }
      return acc
    }, {})

module.exports = {
  getIconNamesByStatus,
}
