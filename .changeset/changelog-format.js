const { getInfo } = require('@changesets/get-github-info')

function optionChecker(options) {
  if (!options || !options.repo) {
    throw new Error(
      'Please provide a repo to this changelog generator like this:\n"changelog": ["./changelog-format.js", { "repo": "org/repo" }]',
    )
  }
}

/** @type {import("@changesets/types").ChangelogFunctions} */
const changelogFunctions = {
  getDependencyReleaseLine: async (_, dependenciesUpdated, options) => {
    optionChecker(options)

    if (dependenciesUpdated.length === 0) return ""

    const updatedDependenciesList = dependenciesUpdated.map((dependency) =>
      `  - ${dependency.name}@${dependency.newVersion}`
    )

    return `\n- Updated dependencies\n${updatedDependenciesList.join("\n")}`
  },
  getReleaseLine: async (changeset, _, options) => {
    optionChecker(options)

    const [firstLine, ...nextLines] = changeset.summary
      .split("\n")
      .map((l) => l.trimEnd())

    let releaseLine = `\n\n- ${firstLine}`

    if (changeset.commit) {
      let { links, user } = await getInfo({
        repo: options.repo,
        commit: changeset.commit,
      })

      const pullRequestLink = links.pull === null ? '' : links.pull
      const userMention = user === null ? '' : `@${user}`

      releaseLine += ` (${pullRequestLink}) by ${userMention}`
    }

    if (nextLines.length > 0) {
      releaseLine += `\n${nextLines.map((l) => `  ${l}`).join("\n")}`
    }

    return releaseLine
  },
}

module.exports = changelogFunctions
