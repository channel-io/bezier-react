export function createSvgGitBlob(path: string, sha: string) {
  return {
    path,
    mode: '100644',
    type: 'blob',
    sha,
  } as const
}
