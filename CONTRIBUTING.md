# Contributing to bezier-react
Welcome to bezier-react. We want to make contributing to this project as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## We Develop with GitHub
We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

## Make Pull request
We actively welcome your pull requests:

1. Fork the repo and create your branch from `master`.
2. If you've added code that should be tested, add tests.
3. Ensure the test suite passes.
4. Make sure your code lints.
5. (Recommended) Commit with [commitizen(cz-cli)](https://github.com/commitizen/cz-cli).
    1. Install commitizen globally.
        ```bash
        yarn global add commitizen
        ```
    2. Commit with commitizen.
        ```bash
        git cz
        ```
6. Push to your forked repository.
7. Issue that pull request (from forked repository to origin).

## Commit Convention
We are using commitizen as described above.
In more detail, it follows the [AngularJS's commit message convention](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#type). You will add what kind of commit belongs to using the commitizen, and the types are as follows.

- feat: A new feature
- fix: A bug fix
- docs: Documentation only changes
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- refactor: A code change that neither fixes a bug nor adds a feature
- perf: A code change that improves performance
- test: Adding missing or correcting existing tests
- chore: Changes to the build process or auxiliary tools and libraries such as documentation generation

## Add a changeset
We are using [changesets](https://github.com/changesets/changesets) as a tool to manage versioning and changelogs. If you think your changes should be released, [add a changeset](https://github.com/changesets/changesets/blob/7febb599167234ae071b5d223b80cbc8a9375709/docs/adding-a-changeset.md) which is a piece of information about your changes.

```bash
yarn changeset
```

## Report bugs using GitHub's [issues](https://github.com/channel-io/bezier-react/issues)
We use GitHub issues to track public bugs. Report a bug by [opening a new issue](https://github.com/channel-io/bezier-react/issues/new/choose).

# License
By contributing, you agree that your contributions will be licensed under its Apache License 2.0. Your submissions are understood to be under the same [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0) that covers the project. Feel free to contact the maintainers if that's a concern.

# References
This document was adapted from the open-source contribution guidelines for [Facebook's Draft](https://github.com/facebook/draft-js/blob/7b2a6168e651f3a27a0665d43e596d987341b06f/CONTRIBUTING.md)
