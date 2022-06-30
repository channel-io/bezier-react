/* External dependencies */
import { useRef, useCallback } from 'react'
import { Octokit } from 'octokit'
import { RestEndpointMethodTypes } from '@octokit/plugin-rest-endpoint-methods'

interface UseGithubAPIProps {
  auth: string
  owner: string
  repo: string
}

type CreateBlobParameters = RestEndpointMethodTypes['git']['createBlob']['parameters']
type GetGitTreeParameters = RestEndpointMethodTypes['git']['getTree']['parameters']
type CreateGitTreeParameters = RestEndpointMethodTypes['git']['createTree']['parameters']
type CreateGitCommitParameters = RestEndpointMethodTypes['git']['createCommit']['parameters']
type CreateGitRefParameters = RestEndpointMethodTypes['git']['createRef']['parameters']
type CreatePullRequestParameters = RestEndpointMethodTypes['pulls']['create']['parameters']

function useGithubAPI({
  auth,
  owner,
  repo,
}: UseGithubAPIProps) {
  const octokit = useRef(new Octokit({ auth }))

  const getGitCommit = useCallback(async (sha: string) => {
    const { data } = await octokit.current.rest.git.getCommit({
      owner,
      repo,
      commit_sha: sha,
    })
    return data
  }, [
    owner,
    repo,
  ])

  const getGitRef = useCallback(async (branchName: string) => {
    const { data } = await octokit.current.rest.git.getRef({
      owner,
      repo,
      ref: `heads/${branchName}`,
    })
    return data.object
  }, [
    owner,
    repo,
  ])

  const getGitTree = useCallback(async (treeSha: GetGitTreeParameters['tree_sha']) => {
    const { data } = await octokit.current.rest.git.getTree({
      owner,
      repo,
      tree_sha: treeSha,
    })
    return data.tree
  }, [
    owner,
    repo,
  ])

  const createGitBlob = useCallback(async (content: CreateBlobParameters['content']) => {
    const { data } = await octokit.current.rest.git.createBlob({
      owner,
      repo,
      content,
      encoding: 'utf-8',
    })
    return data
  }, [
    owner,
    repo,
  ])

  const createGitCommit = useCallback(async (params: {
    message: CreateGitCommitParameters['message']
    author: CreateGitCommitParameters['author']
    parents: CreateGitCommitParameters['parents']
    tree: CreateGitCommitParameters['tree']
  }) => {
    const { data } = await octokit.current.rest.git.createCommit({
      owner,
      repo,
      ...params,
    })
    return data
  }, [
    owner,
    repo,
  ])

  const createGitRef = useCallback(async ({
    branchName,
    sha,
  }: { branchName: CreateGitRefParameters['ref'] } & Pick<CreateGitRefParameters, 'sha'>) => {
    const { data } = await octokit.current.rest.git.createRef({
      owner,
      repo,
      ref: `refs/heads/${branchName}`,
      sha,
    })
    return data
  }, [
    owner,
    repo,
  ])

  const createGitTree = useCallback(async ({
    baseTreeSha,
    tree,
  }: { baseTreeSha?: CreateGitTreeParameters['base_tree'] } & Pick<CreateGitTreeParameters, 'tree'>) => {
    const { data } = await octokit.current.rest.git.createTree({
      owner,
      repo,
      base_tree: baseTreeSha,
      tree,
    })
    return data
  }, [
    owner,
    repo,
  ])

  const createPullRequest = useCallback(async (params: {
    title: CreatePullRequestParameters['title']
    body: CreatePullRequestParameters['body']
    head: CreatePullRequestParameters['head']
    base: CreatePullRequestParameters['base']
  }) => {
    const { data } = await octokit.current.rest.pulls.create({
      owner,
      repo,
      ...params,
    })
    return data
  }, [
    owner,
    repo,
  ])

  return {
    getGitCommit,
    getGitRef,
    getGitTree,
    createGitBlob,
    createGitCommit,
    createGitRef,
    createGitTree,
    createPullRequest,
  }
}

export default useGithubAPI
