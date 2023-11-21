const StyleDictionary = require("style-dictionary");
const tokenCategories = require("./getTokenCategoryByPath");

const { fileHeader, formattedVariables } = StyleDictionary.formatHelpers;

const toKebabCase = (str) =>
  str &&
  str
    .match(
      /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|([A-Z]|[0-9]+)(?=[0-9]|[A-Z])/g
    )
    .map((x) => x.toLowerCase())
    .join("-");

function getBasePxFontSize(options) {
  return (options && options.basePxFontSize) || 16;
}

const TokenBuilder = StyleDictionary.registerTransform({
  type: "value",
  transitive: true,
  name: "font/size/pxToRem",
  matcher: function (token) {
    return (
      token.attributes.category === "font" &&
      (token.attributes.type === "size" ||
        token.attributes.type === "line-height")
    );
  },
  transformer: function (token, options) {
    return `${token.value / getBasePxFontSize(options)}rem`;
  },
})
  .registerFormat({
    name: "javascript/es6",
    formatter: function ({ dictionary, file }) {
      console.log(dictionary);
      return (
        fileHeader({ file }) +
        "export default {" +
        "\n" +
        dictionary.allTokens
          .map(function (token) {
            var to_ret =
              `  "${toKebabCase(token.name)}": ${JSON.stringify(token.value)},`
            if (token.comment) to_ret = to_ret.concat(" // " + token.comment);
            return to_ret;
          })
          .join("\n") +
        "\n" +
        "}"
      );
    },
  })
  .registerFormat({
    name: "custom/cjsmodule",
    formatter: function ({ dictionary }) {
      return `module.exports = {${dictionary.allTokens.map(
        (token) => `\n\t${token.name}: "${token.value}"`
      )}\n};`;
    },
  });

// TokenBuilder.extend({
//   source: ["src/**/*.json"],
//   platforms: {
//     json: {
//       buildPath: "dist/json/",
//       files: [
//         {
//           format: "json/nested",
//           destination: "tokens.json",
//         },
//       ],
//     },
//     types: {
//       transformGroup: "js",
//       buildPath: "dist/types/",
//       files: [
//         {
//           format: "typescript/es6-declarations",
//           destination: "index.d.ts",
//         },
//       ],
//       options: {
//         outputStringLiterals: true,
//       },
//     },
//     "esm/category": {
//       transformGroup: "js",
//       buildPath: "dist/esm/",
//       transforms: ["attribute/cti", "name/cti/camel", "size/px", "color/hex"],
//       files: tokenCategories.map((tokenCategory) => ({
//         destination: `${tokenCategory}.js`,
//         format: "javascript/es6",
//         filter: {
//           attributes: {
//             category: tokenCategory,
//           },
//         },
//       })),
//     },
//     "esm/index": {
//       transformGroup: "js",
//       buildPath: "dist/esm/",
//       transforms: ["attribute/cti", "name/cti/camel", "size/px", "color/hex"],
//       files: [
//         {
//           destination: `index.js`,
//           format: "javascript/es6",
//         },
//       ],
//     },
//     "cjs/category": {
//       transformGroup: "js",
//       buildPath: "dist/cjs/",
//       transforms: ["attribute/cti", "name/cti/camel", "size/px", "color/hex"],
//       files: tokenCategories.map((tokenCategory) => ({
//         destination: `${tokenCategory}.js`,
//         format: "custom/cjsmodule",
//       })),
//     },
//     "cjs/index": {
//       transformGroup: "js",
//       buildPath: "dist/cjs/",
//       transforms: ["attribute/cti", "name/cti/camel", "size/px", "color/hex"],
//       files: [
//         {
//           destination: `index.js`,
//           format: "javascript/module",
//         },
//       ],
//     },
//   },
// }).buildAllPlatforms();

TokenBuilder.extend({
  source: ["src/global/*.json"],
  platforms: {
    js: {
      transformGroup: "js",
      buildPath: "dist/js/",
      files: [
        {
          destination: "global.js",
          format: "javascript/es6",
        },
      ],
    },
    "css/global": {
      transforms: [
        "attribute/cti",
        "name/cti/kebab",
        "time/seconds",
        "content/icon",
        "size/rem",
        "color/css",
        "font/size/pxToRem",
      ],
      basePxFontSize: 10,
      buildPath: `dist/css/`,
      files: [
        {
          destination: `global.css`,
          format: "css/variables",
          options: {
            selector: ":where(:root, :host)",
            outputReferences: true,
          },
        },
      ],
    },
  },
}).buildAllPlatforms();

TokenBuilder.extend({
  source: ["src/global/*.json", "src/semantic/light-theme/*.json"],
  platforms: {
    js: {
      transformGroup: "js",
      buildPath: "dist/js/",
      files: [
        {
          destination: "light-theme.js",
          format: "javascript/es6",
          filter: (token) => token.filePath.includes("light-theme"),
        },
      ],
    },
    "css/light-theme": {
      transforms: [
        "attribute/cti",
        "name/cti/kebab",
        "time/seconds",
        "content/icon",
        "size/rem",
        "color/css",
        "font/size/pxToRem",
      ],
      basePxFontSize: 10,
      buildPath: `dist/css/`,
      files: [
        {
          destination: `light-theme.css`,
          format: "css/variables",
          filter: (token) => token.filePath.includes("light-theme"),
          options: {
            selector: ':where(:root, :host), [data-bezier-theme="light"]',
            outputReferences: true,
          },
        },
      ],
    },
  },
}).buildAllPlatforms();

TokenBuilder.extend({
  source: ["src/global/*.json", "src/semantic/dark-theme/*.json"],
  platforms: {
    "css/dark-theme": {
      transforms: [
        "attribute/cti",
        "name/cti/kebab",
        "time/seconds",
        "content/icon",
        "size/rem",
        "color/css",
        "font/size/pxToRem",
      ],
      basePxFontSize: 10,
      buildPath: `dist/css/`,
      files: [
        {
          destination: `dark-theme.css`,
          format: "css/variables",
          filter: (token) => token.filePath.includes("dark-theme"),
          options: {
            selector: '[data-bezier-theme="dark"]',
            outputReferences: true,
          },
        },
      ],
    },
  },
}).buildAllPlatforms();
