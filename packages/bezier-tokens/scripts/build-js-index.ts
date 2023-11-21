import fs from "fs";
import path from "path";

interface BuildJsIndexFileOptions {
  buildPath: string;
  isCjs: boolean;
}

const getFileExtensionByModuleSystem = (isCjs: boolean) =>
  isCjs ? ".js" : ".mjs";

function buildJsIndexFile({ buildPath, isCjs }: BuildJsIndexFileOptions) {
  const fileExtension = getFileExtensionByModuleSystem(isCjs);

  let exportStatements = "";

  if (!fs.existsSync(buildPath)) {
    console.log(`Directory not found: ${buildPath}`);
    return;
  }

  const files = fs.readdirSync(buildPath);
  console.log(`Reading files in ${buildPath}:`, files);

  files.forEach((file) => {
    if (!file.endsWith(fileExtension)) {
      return;
    }
    const moduleName = file.replace(fileExtension, "");
    if (isCjs) {
      exportStatements += `var ${moduleName} = require('./${moduleName}');\n`;
    } else {
      exportStatements += `export * from './${file}';\n`;
    }
  });

  if (isCjs) {
    exportStatements += `\nmodule.exports = {\n`;
    files.forEach((file) => {
      const moduleName = file.replace(fileExtension, "");
      exportStatements += `  ...${moduleName},\n`;
    });
    exportStatements += `};\n`;
  }

  const indexFile = `index${fileExtension}`;
  fs.writeFileSync(path.join(buildPath, indexFile), exportStatements);
  console.log(`✅ Created ${indexFile} in ${buildPath}`);
}

function main() {
  [
    {
      buildPath: "dist/cjs",
      isCjs: true,
    },
    {
      buildPath: "dist/esm",
      isCjs: false,
    },
  ].forEach(buildJsIndexFile);
}

main();
