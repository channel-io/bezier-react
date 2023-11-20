const { readdirSync, statSync } = require("fs");
const { join, resolve } = require("path");

const dirs = (path) =>
  readdirSync(path).reduce((acc, file) => {
    const fullPath = join(path, file);
    if (statSync(fullPath).isDirectory()) {
      const subDirs = dirs(fullPath);
      subDirs.length > 0 ? acc.push(...subDirs) : acc.push(file);
    }
    return acc;
  }, []);

const srcPath = resolve(__dirname, '..', 'src');

module.exports = dirs(srcPath);
