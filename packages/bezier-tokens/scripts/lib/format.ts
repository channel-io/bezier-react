import { formatHelpers, Named, Format } from "style-dictionary";

type CustomFormat = Named<Format>;

const { fileHeader } = formatHelpers;

const fileName = (path: string) => path.split(".")[0];

export const customJsCjs: CustomFormat = {
  name: "custom/js/cjs",
  formatter: function ({ dictionary, file }) {
    return (
      fileHeader({ file }) +
      `exports.${fileName(file.destination)} = {` +
      "\n" +
      dictionary.allTokens
        .map((token) => `  "${token.name}": ${JSON.stringify(token.value)},`)
        .join("\n") +
      "\n" +
      "}"
    );
  },
};

export const customJsEsm: CustomFormat = {
  name: "custom/js/esm",
  formatter: function ({ dictionary, file }) {
    return (
      fileHeader({ file }) +
      `export const ${fileName(file.destination)} = {` +
      "\n" +
      dictionary.allTokens
        .map((token) => `  "${token.name}": ${JSON.stringify(token.value)},`)
        .join("\n") +
      "\n" +
      "}"
    );
  },
};
