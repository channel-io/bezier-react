import {
  useCallback,
  useMemo,
} from 'react'

import { type RestEndpointMethodTypes } from '@octokit/plugin-rest-endpoint-methods'
import { Octokit } from 'octokit'

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
type AddLabelsRequestParameters = RestEndpointMethodTypes['issues']['addLabels']['parameters']

function useGithubAPI({
  auth,
  owner,
  repo,
}: UseGithubAPIProps) {
  const octokit = useMemo(() => new Octokit({ auth }), [auth])

  const getGitCommit = useCallback(async (sha: string) => {
    const { data } = await octokit.rest.git.getCommit({
      owner,
      repo,
      commit_sha: sha,
    })
    return data
  }, [
    octokit,
    owner,
    repo,
  ])

  const getGitRef = useCallback(async (branchName: string) => {
    const { data } = await octokit.rest.git.getRef({
      owner,
      repo,
      ref: `heads/${branchName}`,
    })
    return data.object
  }, [
    octokit,
    owner,
    repo,
  ])

  const getGitTree = useCallback(async (treeSha: GetGitTreeParameters['tree_sha']) => {
    const { data } = await octokit.rest.git.getTree({
      owner,
      repo,
      tree_sha: treeSha,
    })
    return data.tree
  }, [
    octokit,
    owner,
    repo,
  ])

  const createGitBlob = useCallback(async (content: CreateBlobParameters['content']) => {
    const { data } = await octokit.rest.git.createBlob({
      owner,
      repo,
      content,
      encoding: 'utf-8',
    })
    return data
  }, [
    octokit,
    owner,
    repo,
  ])

  const createGitCommit = useCallback(async (params: {
    message: CreateGitCommitParameters['message']
    author: CreateGitCommitParameters['author']
    parents: CreateGitCommitParameters['parents']
    tree: CreateGitCommitParameters['tree']
  }) => {
    const { data } = await octokit.rest.git.createCommit({
      owner,
      repo,
      ...params,
    })
    return data
  }, [
    octokit,
    owner,
    repo,
  ])

  const createGitRef = useCallback(async ({
    branchName,
    sha,
  }: { branchName: CreateGitRefParameters['ref'] } & Pick<CreateGitRefParameters, 'sha'>) => {
    const { data } = await octokit.rest.git.createRef({
      owner,
      repo,
      ref: `refs/heads/${branchName}`,
      sha,
    })
    return data
  }, [
    octokit,
    owner,
    repo,
  ])

  const createGitTree = useCallback(async ({
    baseTreeSha,
    tree,
  }: { baseTreeSha?: CreateGitTreeParameters['base_tree'] } & Pick<CreateGitTreeParameters, 'tree'>) => {
    const { data } = await octokit.rest.git.createTree({
      owner,
      repo,
      base_tree: baseTreeSha,
      tree,
    })
    return data
  }, [
    octokit,
    owner,
    repo,
  ])

  const createPullRequest = useCallback(async (params: {
    title: CreatePullRequestParameters['title']
    body: CreatePullRequestParameters['body']
    head: CreatePullRequestParameters['head']
    base: CreatePullRequestParameters['base']
  }) => {
    const { data } = await octokit.rest.pulls.create({
      owner,
      repo,
      ...params,
    })
    return data
  }, [
    octokit,
    owner,
    repo,
  ])

  /**
   * NOTE: Every pull request is an issue.
   * @see https://docs.github.com/en/rest/issues/labels?apiVersion=2022-11-28#about-labels
   */
  const addLabels = useCallback(async ({
    issueNumber,
    labels,
  }: { issueNumber: AddLabelsRequestParameters['issue_number'] } & Pick<AddLabelsRequestParameters, 'labels'>) => {
    const { data } = await octokit.rest.issues.addLabels({
      owner,
      repo,
      issue_number: issueNumber,
      labels,
    })
    return data
  }, [
    octokit,
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
    addLabels,
  }
}

export default useGithubAPI
