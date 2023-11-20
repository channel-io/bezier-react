const StyleDictionary = require("style-dictionary");
const tokenCategories = require("./getTokenCategoryByPath");

StyleDictionary.extend({
  source: ["src/**/*.json"],
  platforms: {
    json: {
      buildPath: "dist/json/",
      files: [
        {
          format: "json/nested",
          destination: "tokens.json",
        },
      ],
    },
    types: {
      transformGroup: "js",
      buildPath: "dist/types/",
      files: [
        {
          format: "typescript/es6-declarations",
          destination: "index.d.ts",
        },
      ],
      options: {
        outputStringLiterals: true,
      },
    },
    "esm/category": {
      transformGroup: "js",
      buildPath: "dist/esm/",
      transforms: ["attribute/cti", "name/cti/camel", "size/px", "color/hex"],
      files: tokenCategories.map((tokenCategory) => ({
        destination: `${tokenCategory}.js`,
        format: "javascript/es6",
        filter: {
          attributes: {
            category: tokenCategory,
          },
        },
      })),
    },
    "esm/index": {
      transformGroup: "js",
      buildPath: "dist/esm/",
      transforms: ["attribute/cti", "name/cti/camel", "size/px", "color/hex"],
      files: [
        {
          destination: `index.js`,
          format: "javascript/es6",
        },
      ],
    },
    "cjs/category": {
      transformGroup: "js",
      buildPath: "dist/cjs/",
      transforms: ["attribute/cti", "name/cti/camel", "size/px", "color/hex"],
      files: tokenCategories.map((tokenCategory) => ({
        destination: `${tokenCategory}.js`,
        format: "custom/cjsmodule",
      })),
    },
    "cjs/index": {
      transformGroup: "js",
      buildPath: "dist/cjs/",
      transforms: ["attribute/cti", "name/cti/camel", "size/px", "color/hex"],
      files: [
        {
          destination: `index.js`,
          format: "javascript/module",
        },
      ],
    },
    // scss: {
    //   transformGroup: "scss",
    //   buildPath: `dist/scss/`,
    //   files: [
    //     {
    //       destination: `tokens.scss`,
    //       format: "scss/variables",
    //       options: {
    //         outputReferences: true,
    //       }
    //     },
    //   ],
    // },
    "scss/category": {
      transformGroup: "scss",
      buildPath: `dist/scss/`,
      files: tokenCategories.map((tokenCategory) => ({
        destination: `_${tokenCategory}.scss`,
        format: "scss/variables",
        filter: (token) => token.filePath.includes(tokenCategory),
        options: {
          outputReferences: true,
        },
      })),
    },
  },
})
  .registerFormat({
    name: "custom/cjsmodule",
    formatter: function ({ dictionary }) {
      return `module.exports = {${dictionary.allTokens.map(
        (token) => `\n\t${token.name}: "${token.value}"`
      )}\n};`;
    },
  })
  .buildAllPlatforms();

StyleDictionary.extend({
  source: ["src/global/*.json", "src/semantic/dark-theme/*.json"],
  platforms: {
    "css/category": {
      transformGroup: "css",
      buildPath: `dist/css/`,
      files: tokenCategories
        .filter((tokenCategory) => tokenCategory === "dark-theme")
        .map((tokenCategory) => ({
          destination: `${tokenCategory}.css`,
          format: "css/variables",
          filter: (token) => token.filePath.includes(tokenCategory),
          options: {
            selector: ':where(:root, :host) [data-bezier-theme="dark"]',
            /**
             * NOTE: The following error will be thrown, but that's the intent.
             * filtered out token references were found; output may be unexpected. Here are the references that are used but not defined in the file
             */
            outputReferences: true,
          },
        })),
    },
  },
})
  .registerFormat({
    name: "custom/cjsmodule",
    formatter: function ({ dictionary }) {
      return `module.exports = {${dictionary.allTokens.map(
        (token) => `\n\t${token.name}: "${token.value}"`
      )}\n};`;
    },
  })
  .buildAllPlatforms();
