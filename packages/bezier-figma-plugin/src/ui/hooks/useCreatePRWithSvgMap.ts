import { useCallback } from 'react'

import config from '../../config'
import { type SvgByName } from '../../types/Message'

import useGithubAPI from './useGithubAPI'

export function useCreatePRWithSvgMap(githubToken: string) {
  const githubAPI = useGithubAPI({
    auth: githubToken,
    owner: config.repository.owner,
    repo: config.repository.name,
  })

  const createPRWithSvgMap = useCallback(async (svgByName: SvgByName) => {
    const mainBranch = await githubAPI.getGitRef('main')
    const blob = await githubAPI.createGitBlob(JSON.stringify(svgByName))
    const tree = await githubAPI.createGitTree({
      baseTreeSha: mainBranch.sha,
      tree: [{
        sha: blob.sha,
        path: 'packages/bezier-icons/icons.json',
        type: 'blob',
        mode: '100644',
      }],
    })
    const commit = await githubAPI.createGitCommit({
      message: 'icon-update',
      tree: tree.sha,
      parents: [mainBranch.sha],
      author: {
        ...config.commit.author,
        date: new Date().toISOString(),
      } })

    const newBranchName = `icon-${new Date().getTime()}`

    await githubAPI.createGitRef({ branchName: newBranchName, sha: commit.sha })
    await githubAPI.createPullRequest({ title: config.pr.title, body: config.pr.body, head: newBranchName, base: config.repository.baseBranchName })
  }, [githubAPI])

  return createPRWithSvgMap
}
