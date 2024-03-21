# Bezier React

[![storybook](https://shields.io/badge/storybook-white?logo=storybook&style=flat)](https://main--62bead1508281287d3c94d25.chromatic.com) ![version](https://img.shields.io/github/package-json/v/channel-io/bezier-react?filename=packages%2Fbezier-react%2Fpackage.json) [![CircleCI](https://dl.circleci.com/status-badge/img/gh/channel-io/bezier-react/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/channel-io/bezier-react/tree/main) [![codecov](https://codecov.io/gh/channel-io/bezier-react/branch/main/graph/badge.svg?token=bwCtdh41fD)](https://codecov.io/gh/channel-io/bezier-react)

> Monorepo for [bezier-react](packages/bezier-react) and related packages.

## About this repo

| Name                                                | Description                                                                   |
| --------------------------------------------------- | ----------------------------------------------------------------------------- |
| [bezier-react](packages/bezier-react)               | React components library that implements Bezier design system.                |
| [bezier-icons](packages/bezier-icons)               | Icon library that implements Bezier design system.                            |
| [bezier-codemod](packages/bezier-codemod)           | Codemod transformations to help upgrade app using Bezier design system.       |
| [bezier-figma-plugin](packages/bezier-figma-plugin) | Figma plugin that helps build Bezier design system and increase productivity. |
| [bezier-tokens](packages/bezier-tokens)             | Design token library for Bezier design system.                                |

## Commands

### Install dependencies

```bash
yarn install
```

### Build workspaces

```bash
yarn build
```

### Build a specific workspace

```bash
yarn build --filter=<workspace>
```

### Run Storybook

```bash
yarn dev
```

### Other Commands

| Command                | Description                             |
| ---------------------- | --------------------------------------- |
| `yarn test`            | Tests all workspaces                    |
| `yarn lint`            | Lints all workspaces                    |
| `yarn typecheck`       | Type checks all workspaces              |
| `yarn clean`           | Remove generated files                  |
| `yarn update-snapshot` | Update test snapshots of `bezier-react` |

## Contributing

See [contribution guide](./.github/CONTRIBUTING.md).

## Maintainers

This package is mainly contributed by Channel Corp. Although feel free to contribution, or raise concerns!
