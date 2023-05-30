# Bezier React

[![storybook](https://shields.io/badge/storybook-white?logo=storybook&style=flat)](https://main--62bead1508281287d3c94d25.chromatic.com) ![version](https://img.shields.io/github/package-json/v/channel-io/bezier-react?filename=packages%2Fbezier-react%2Fpackage.json) [![CircleCI](https://dl.circleci.com/status-badge/img/gh/channel-io/bezier-react/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/channel-io/bezier-react/tree/main) [![codecov](https://codecov.io/gh/channel-io/bezier-react/branch/main/graph/badge.svg?token=bwCtdh41fD)](https://codecov.io/gh/channel-io/bezier-react)

> Monorepo for [bezier-react](packages/bezier-react) and related packages.

## About this repo

| Name | Description |
|---|---|
| [bezier-react](packages/bezier-react) | React components library that implements Bezier Design System. |
| [bezier-figma-plugin](packages/bezier-figma-plugin) | Figma plugin that helps build Bezier Design System and increase productivity. |

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
yarn storybook
```

### Other Commands

| Command | Description |
|---|---|
| `yarn dev` | Runs Storybook and Builds Figma plugin in watch mode |
| `yarn test` | Tests all workspaces |
| `yarn lint` | Lints all workspaces |
| `yarn typecheck` | Compiles `bezier-react` |
| `yarn clean` | Remove generated files |
| `yarn update-snapshot` | Update test snapshots of `bezier-react` |

## Contribute

See [contribution guide](CONTRIBUTING.md).

## Maintainers

This package is mainly contributed by Channel Corp. Although feel free to contribution, or raise concerns!
