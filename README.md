# Bezier React

[![storybook](https://shields.io/badge/storybook-white?logo=storybook&style=flat)](https://next-v1--62bead1508281287d3c94d25.chromatic.com) ![version](https://img.shields.io/github/package-json/v/channel-io/bezier-react?filename=packages%2Fbezier-react%2Fpackage.json) [![circleci](https://circleci.com/gh/channel-io/bezier-react/tree/next-v1.svg?style=svg)](https://app.circleci.com/pipelines/github/channel-io/bezier-react) [![codecov](https://codecov.io/gh/channel-io/bezier-react/branch/next-v1/graph/badge.svg?token=bwCtdh41fD)](https://app.codecov.io/gh/channel-io/bezier-react/branch/next-v1)

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
yarn dev --filter=@channel.io/bezier-react
```

### Other Commands

| Command | Description |
|---|---|
| `yarn lint` | Lints all workspaces |
| `yarn clean` | Remove generated files |

## Contribute

See [contribution guide](CONTRIBUTING.md).

## Maintainers

This package is mainly contributed by Channel Corp. Although feel free to contribution, or raise concerns!
